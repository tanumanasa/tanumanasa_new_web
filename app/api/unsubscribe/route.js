import { getDb } from '@/lib/db';
import { SITE_URL } from '@/lib/config';
import { EMAIL_RE, clean, safeEqual, unsubToken } from '@/lib/security';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function GET(req) {
  const url = new URL(req.url);
  const email = clean(url.searchParams.get('e') || '', 190).toLowerCase();
  const token = url.searchParams.get('t') || '';
  let ok = EMAIL_RE.test(email) && safeEqual(unsubToken(email), token);
  if (ok) {
    try { getDb().prepare("UPDATE subscribers SET status = 'unsubscribed' WHERE email = ?").run(email); }
    catch (e) { ok = false; console.error('[unsubscribe]', e); }
  }
  const msg = ok ? 'You have been unsubscribed. You will not receive further updates.' : 'This unsubscribe link is invalid or has expired. Please contact hello@tanumanasa.com.';
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Unsubscribe | Tanumanasa Research</title><style>body{margin:0;font-family:system-ui,sans-serif;background:#FFFDFB;color:#2A1620;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}main{max-width:480px;text-align:center}a{color:#920D54;font-weight:600}</style></head><body><main><h1>Tanumanasa Research</h1><p>${esc(msg)}</p><p><a href="${esc(SITE_URL)}">Back to the website</a></p></main></body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}
