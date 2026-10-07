import { NextResponse } from 'next/server';
import { CSRF_COOKIE, issueCsrf, originOk } from '@/lib/security';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  if (!originOk(req)) return NextResponse.json({ ok: false }, { status: 403 });
  const { token, cookie } = issueCsrf();
  const res = NextResponse.json({ ok: true, token }, { headers: { 'Cache-Control': 'no-store' } });
  res.cookies.set(CSRF_COOKIE, cookie, {
    httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production', path: '/api', maxAge: 86400,
  });
  return res;
}
