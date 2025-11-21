import { NextResponse } from 'next/server';
import { SESSION_COOKIE } from '@/lib/session';

export function POST(request: Request) {
  const res = NextResponse.redirect(new URL('/', request.url));

  res.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,

  });
}
