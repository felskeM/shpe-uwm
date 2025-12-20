import { PrismaClient } from '../app/generated/prisma/edge';

export function getPrisma() {
  const accelerateUrl = process.env.DATABASE_URL;
  if (!accelerateUrl) {
    throw new Error('DATABASE_URL (Accelerate URL) is not set');
  }

  return new PrismaClient({ accelerateUrl });
}
