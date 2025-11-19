// lib/session.ts
import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import type { User } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export const SESSION_COOKIE = 'shpe_session';

function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error('SESSION_SECRET is not set');
  }
  return new TextEncoder().encode(secret);
}

// Create a signed JWT for a user id
export async function signSession(userId: number): Promise<string> {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // adjust as needed
    .sign(getSecretKey());

  return token;
}

// Internal: verify a JWT and pull the userId out
async function verifySessionToken(token: string): Promise<number | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    const userId = (payload as { userId?: unknown }).userId;
    if (typeof userId !== 'number') return null;
    return userId;
  } catch {
    return null;
  }
}

export async function getSessionUser(): Promise<User | null> {
  await Promise.resolve();
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const userId = await verifySessionToken(token);
  if (!userId) return null;

  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user;
}

// For logout route
export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
