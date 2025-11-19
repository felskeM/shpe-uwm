import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export type AuthUser = {
  id: number;
  email: string;
  passwordHash: string;
  name: string | null;
  role: string;
};

function isAuthUserLike(value: unknown): value is AuthUser {
  if (typeof value !== 'object' || value === null) return false;

  const v = value as Record<string, unknown>;

  return (
    typeof v.id === 'number' &&
    typeof v.email === 'string' &&
    typeof v.passwordHash === 'string' &&
    (typeof v.name === 'string' || v.name === null) &&
    typeof v.role === 'string'
  );
}

export async function verifyUser(email: string, password: string): Promise<AuthUser | null> {
  const userUnknown: unknown = await prisma.user.findUnique({
    where: { email },
  });

  if (!isAuthUserLike(userUnknown)) {
    return null;
  }

  const ok = await bcrypt.compare(password, userUnknown.passwordHash);
  if (!ok) return null;

  return userUnknown;
}
