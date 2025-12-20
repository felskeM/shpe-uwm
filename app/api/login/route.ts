import { NextResponse } from 'next/server';
import { verifyUser } from '@/lib/auth';
import { SESSION_COOKIE, signSession } from '@/lib/session';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const rawEmail = formData.get('email');
    const rawPassword = formData.get('password');

    if (typeof rawEmail !== 'string' || typeof rawPassword !== 'string') {
      return NextResponse.redirect(new URL('/login?error=missing', req.url), { status: 302 });
    }

    const email = rawEmail.trim().toLowerCase();
    const password = rawPassword;

    if (!email || !password) {
      return NextResponse.redirect(new URL('/login?error=missing', req.url), { status: 302 });
    }

    const user = await verifyUser(email, password);

    if (!user) {
      return NextResponse.redirect(new URL('/login?error=invalid', req.url), { status: 302 });
    }

    const token = await signSession(user.id);

    const res = NextResponse.redirect(new URL('/events/manage', req.url));
    res.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err) {
    console.error('LOGIN_ERROR', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
