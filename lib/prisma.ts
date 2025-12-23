import { PrismaClient } from '../app/generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

type PrismaExtended = ReturnType<PrismaClient['$extends']>;

const globalForPrisma = globalThis as unknown as { prisma?: PrismaExtended };

export const prisma: PrismaExtended =
  globalForPrisma.prisma ?? new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
