import { NextResponse } from 'next/server';
import { getDb, nowIso } from '@/lib/db';
import { LIMITS, SITE_URL } from '@/lib/config';
import { EMAIL_RE, clean, clientIp, ipHash, originOk, rateLimit, unsubToken, verifyCsrf } from '@/lib/security';
import { autoreplyEnabled, sendMail } from '@/lib/mail';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const reply = (status, body) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(req) {
  if (!originOk(req)) return reply(403, { ok: false, message: 'Request blocked.' });
  let input;
  try { input = await req.json(); } catch { return reply(400, { ok: false, message: 'Invalid request.' }); }
  if (verifyCsrf(req) === 'invalid') return reply(403, { ok: false, message: 'Your session expired. Please try again.' });
  if (input.website) return reply(200, { ok: true, message: 'Thank you for subscribing.' });

  const email = clean(input.email, 190).toLowerCase();
  const source = clean(input.source || 'website', 40);
  if (!EMAIL_RE.test(email)) return reply(422, { ok: false, message: 'Enter a valid email address.', errors: { email: 'Enter a valid email address.' } });

  try {
    const ipH = ipHash(clientIp(req.headers));
    if (!rateLimit(ipH, 'subscribe', LIMITS.subscribeMax, LIMITS.windowSec)) return reply(429, { ok: false, message: 'Too many attempts. Please try again later.' });
    const db = getDb();
    const row = db.prepare('SELECT status FROM subscribers WHERE email = ?').get(email);
    if (row?.status === 'active') return reply(200, { ok: true, message: 'You are already subscribed — thank you!' });
    if (!row) db.prepare('INSERT INTO subscribers (email, created_at, source, ip_hash) VALUES (?, ?, ?, ?)').run(email, nowIso(), source, ipH);
    else db.prepare("UPDATE subscribers SET status = 'active', created_at = ?, source = ? WHERE email = ?").run(nowIso(), source, email);
  } catch (e) {
    console.error('[subscribe]', e);
    return reply(500, { ok: false, message: 'We could not save your subscription. Please try again later.' });
  }

  if (autoreplyEnabled()) {
    const unsub = `${SITE_URL}/api/unsubscribe?e=${encodeURIComponent(email)}&t=${unsubToken(email)}`;
    await sendMail({
      to: email,
      subject: 'You are subscribed — Tanumanasa Research',
      text: `Thank you for subscribing to updates from Tanumanasa Research.\n\nWe write roughly once a month — research updates, model releases and practical guides.\n\nUnsubscribe at any time: ${unsub}\n\n— Tanumanasa Research\n${SITE_URL}\n`,
    });
  }
  return reply(200, { ok: true, message: 'Thank you — you are subscribed. Look out for our next update.' });
}
