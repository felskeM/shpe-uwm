import bcrypt from 'bcryptjs';
import { getPrisma } from '@/lib/prisma';

export async function verifyUser(email: string, password: string) {
  const prisma = getPrisma();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return null;

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return null;

  return user;
}
