import { PrismaClient } from '../app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

function makePrisma() {
  const accelerateUrl = process.env.DATABASE_URL;
  if (!accelerateUrl) throw new Error('DATABASE_URL (Accelerate URL) is not set');

  return new PrismaClient({ accelerateUrl }).$extends(withAccelerate());
}

const globalForPrisma = globalThis as unknown as {
  prisma?: ReturnType<typeof makePrisma>;
};

export const prisma = globalForPrisma.prisma ?? makePrisma();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
