import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { DATA_DIR, getDb } from './db';
import { LIMITS } from './config';

let cachedSecret = null;
export function secret() {
  if (cachedSecret) return cachedSecret;
  if (process.env.APP_SECRET && process.env.APP_SECRET.length >= 32) return (cachedSecret = process.env.APP_SECRET);
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const file = path.join(DATA_DIR, 'secret.key');
  if (!fs.existsSync(file)) fs.writeFileSync(file, crypto.randomBytes(48).toString('hex'), { mode: 0o600 });
  return (cachedSecret = fs.readFileSync(file, 'utf8').trim());
}

const hmac = (v) => crypto.createHmac('sha256', secret()).update(v).digest('base64url');

export function sign(value) {
  return `${value}.${hmac(value)}`;
}
export function unsign(signed) {
  if (typeof signed !== 'string') return null;
  const i = signed.lastIndexOf('.');
  if (i < 1) return null;
  const value = signed.slice(0, i);
  const a = Buffer.from(signed.slice(i + 1));
  const b = Buffer.from(hmac(value));
  return a.length === b.length && crypto.timingSafeEqual(a, b) ? value : null;
}

export function safeEqual(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function clientIp(headers) {
  const xf = headers.get('x-forwarded-for');
  return ((xf ? xf.split(',')[0] : headers.get('x-real-ip')) || '').trim();
}
export const ipHash = (ip) => crypto.createHmac('sha256', secret()).update('ip|' + ip).digest('hex');

export function rateLimit(ipH, action, max, windowSec) {
  const db = getDb();
  const now = Math.floor(Date.now() / 1000);
  db.prepare('DELETE FROM hits WHERE ts < ?').run(now - 86400);
  const { n } = db.prepare('SELECT COUNT(*) AS n FROM hits WHERE ip_hash = ? AND action = ? AND ts > ?').get(ipH, action, now - windowSec);
  if (n >= max) return false;
  db.prepare('INSERT INTO hits (ip_hash, action, ts) VALUES (?, ?, ?)').run(ipH, action, now);
  return true;
}

export function originOk(req) {
  let origin = req.headers.get('origin');
  if (!origin) {
    const ref = req.headers.get('referer');
    if (!ref) return true; // CSRF token is still required
    try { origin = new URL(ref).origin; } catch { return false; }
  }
  let host;
  try { host = new URL(origin).host.toLowerCase(); } catch { return false; }
  const selfHost = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').toLowerCase();
  if (host === selfHost) return true;
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(origin.toLowerCase());
}

/* CSRF: double-submit token. /api/csrf sets a signed httpOnly cookie "token.issuedAt" and returns the token;
   the browser echoes the token in the X-CSRF-Token header. */
export const CSRF_COOKIE = 'tm_csrf';
export function issueCsrf() {
  const token = crypto.randomBytes(24).toString('hex');
  return { token, cookie: sign(`${token}.${Date.now()}`) };
}
export function verifyCsrf(req) {
  const raw = unsign(req.cookies.get(CSRF_COOKIE)?.value);
  const header = req.headers.get('x-csrf-token') || '';
  if (!raw || !header) return 'invalid';
  const [token, ts] = raw.split('.');
  if (!safeEqual(token, header)) return 'invalid';
  const age = Date.now() - Number(ts);
  if (!(age >= 0) || age > 86400000) return 'invalid';
  if (age < LIMITS.minFillMs) return 'fast';
  return 'ok';
}

export function clean(v, max) {
  if (typeof v !== 'string') return '';
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').replace(/<[^>]*>/g, '').trim().slice(0, max);
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+0-9 ()\-]{7,20}$/;

export function unsubToken(email) {
  return crypto.createHmac('sha256', secret()).update('unsub|' + email.toLowerCase()).digest('hex').slice(0, 32);
}
