import bcrypt from 'bcryptjs';
import type { User } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export async function verifyUser(email: string, password: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;

  return user;
}
