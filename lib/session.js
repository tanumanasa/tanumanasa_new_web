import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { sign, unsign, safeEqual } from './security';

const NAME = 'tm_admin';
const TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export async function getAdmin() {
  const raw = unsign((await cookies()).get(NAME)?.value);
  if (!raw) return null;
  try {
    const { u, exp } = JSON.parse(Buffer.from(raw, 'base64url').toString('utf8'));
    if (!u || Date.now() > exp) return null;
    if (process.env.ADMIN_USER && u !== process.env.ADMIN_USER) return null;
    return u;
  } catch {
    return null;
  }
}

export async function setAdmin(user) {
  const payload = Buffer.from(JSON.stringify({ u: user, exp: Date.now() + TTL_MS })).toString('base64url');
  (await cookies()).set(NAME, sign(payload), {
    httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/admin', maxAge: TTL_MS / 1000,
  });
}

export async function clearAdmin() {
  (await cookies()).set(NAME, '', { path: '/admin', maxAge: 0 });
}

export const adminConfigured = () => Boolean(process.env.ADMIN_USER && process.env.ADMIN_PASSWORD_HASH);

export function verifyPassword(user, password) {
  const U = process.env.ADMIN_USER;
  const H = process.env.ADMIN_PASSWORD_HASH;
  if (!U || !H || !H.includes(':')) return false;
  const [salt, hash] = H.split(':');
  const calc = crypto.scryptSync(String(password), Buffer.from(salt, 'hex'), 64);
  const expected = Buffer.from(hash, 'hex');
  const passOk = calc.length === expected.length && crypto.timingSafeEqual(calc, expected);
  return safeEqual(user, U) && passOk;
}
