import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { getDb, nowIso } from '@/lib/db';
import { INTENTS, LIMITS, SITE_URL, recipientFor } from '@/lib/config';
import { EMAIL_RE, PHONE_RE, clean, clientIp, ipHash, originOk, rateLimit, verifyCsrf } from '@/lib/security';
import { autoreplyEnabled, sendMail } from '@/lib/mail';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const reply = (status, body) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
const UNAVAILABLE = 'Our form service is temporarily unavailable. Please email hello@tanumanasa.com.';

export async function POST(req) {
  if (!originOk(req)) return reply(403, { ok: false, message: 'Request blocked.' });
  if (Number(req.headers.get('content-length') || 0) > 100_000) return reply(413, { ok: false, message: 'Your message is too long.' });

  let input;
  try { input = await req.json(); } catch { return reply(400, { ok: false, message: 'Invalid request.' }); }

  const csrf = verifyCsrf(req);
  if (csrf === 'invalid') return reply(403, { ok: false, message: 'Your session expired. Please press send again.' });
  // Honeypot — bots fill hidden fields. Pretend success, store nothing.
  if (input.contactFax) return reply(200, { ok: true, message: 'Thank you — your message has been received.' });
  if (csrf === 'fast') return reply(429, { ok: false, message: 'That was very quick — please wait a few seconds and try again.' });

  const ipH = ipHash(clientIp(req.headers));
  try {
    if (!rateLimit(ipH, 'contact', LIMITS.contactMax, LIMITS.windowSec)) {
      return reply(429, { ok: false, message: 'Too many messages from your network. Please try again later or email us directly.' });
    }
  } catch (e) {
    console.error('[contact] rate limit', e);
    return reply(500, { ok: false, message: UNAVAILABLE });
  }

  const d = {
    intent: clean(input.intent, 40),
    name: clean(input.name, 120),
    organisation: clean(input.organisation, 160),
    email: clean(input.email, 190).toLowerCase(),
    phone: clean(input.phone, 25),
    detail: clean(input.detail, 300),
    message: clean(input.message, 5000),
    page: clean(input.page, 200),
  };
  if (!INTENTS[d.intent]) d.intent = 'general';

  const errors = {};
  if (d.name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(d.email)) errors.email = 'Enter a valid email address.';
  if (d.phone && !PHONE_RE.test(d.phone)) errors.phone = 'Enter a valid phone number.';
  if (d.message.length < 10) errors.message = 'Please write at least 10 characters.';
  if (!input.consent) errors.consent = 'Please tick this box to continue.';
  if (Object.keys(errors).length) return reply(422, { ok: false, message: 'Please check the highlighted fields.', errors });

  const label = INTENTS[d.intent];
  const fingerprint = crypto.createHash('sha256').update(`${d.email}|${d.intent}|${d.message}`).digest('hex');

  let id;
  try {
    const db = getDb();
    const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const dupe = db.prepare('SELECT id, email_sent FROM enquiries WHERE fingerprint = ? AND created_at > ? LIMIT 1').get(fingerprint, since);
    if (dupe && dupe.email_sent) {
      return reply(200, { ok: true, duplicate: true, id: dupe.id, message: `We already have this message (ref. #${dupe.id}) — our team will be in touch shortly.` });
    }
    if (dupe) {
      return reply(502, { ok: false, id: dupe.id, message: `Your enquiry was saved as reference #${dupe.id}, but we could not deliver it to the company. Please email hello@tanumanasa.com directly.` });
    }
    const r = db.prepare(`INSERT INTO enquiries (created_at, intent, name, organisation, email, phone, detail, message, page, ip_hash, user_agent, fingerprint)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(
      nowIso(), d.intent, d.name, d.organisation, d.email, d.phone, d.detail, d.message, d.page, ipH,
      clean(req.headers.get('user-agent') || '', 250), fingerprint,
    );
    id = Number(r.lastInsertRowid);
  } catch (e) {
    console.error('[contact] insert', e);
    return reply(500, { ok: false, message: 'We could not save your message. Please try again or email hello@tanumanasa.com.' });
  }

  const text = [
    `New website enquiry #${id}`, `Type: ${label}`, '',
    `Name: ${d.name}`, `Organisation: ${d.organisation || '—'}`, `Email: ${d.email}`, `Phone: ${d.phone || '—'}`, `Detail: ${d.detail || '—'}`, '',
    'Message:', d.message, '', `Submitted from: ${d.page || '—'}`, `Manage enquiries: ${SITE_URL}/admin/enquiry?id=${id}`,
  ].join('\n');
  const sent = await sendMail({ to: recipientFor(d.intent), subject: `[${label}] New enquiry #${id} from ${d.name}`, text, replyTo: d.email });
  try { getDb().prepare('UPDATE enquiries SET email_sent = ? WHERE id = ?').run(sent ? 1 : 0, id); } catch {}
  if (!sent) {
    return reply(200, { ok: true, id, emailSent: false, message: `Your enquiry was saved as reference #${id}, but email delivery is currently unavailable. Our team can still view it in the admin panel.` });
  }

  if (autoreplyEnabled()) {
    await sendMail({
      to: d.email,
      subject: 'We received your message — Tanumanasa Research',
      text: `Hello ${d.name},\n\nThank you for contacting Tanumanasa Research. Your enquiry   has reached our team. We usually respond within two working days.\n\nIf you did not send this message, you can ignore this email.\n\n— Tanumanasa Research\n3rd Floor, Tower-A, Odisha Startup Incubation Centre (O-HUB), SEZ Road, Bhubaneswar 751024, Odisha, India\n${SITE_URL}\n`,
    });
  }

  return reply(200, { ok: true, id, message: `Thank you — your enquiry has been successfully received. Our team will review it and get back to you within two working days.` });
}
