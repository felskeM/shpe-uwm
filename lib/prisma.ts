import { PrismaClient } from '../app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

const makePrisma = () => new PrismaClient().$extends(withAccelerate());
type PrismaWithAccelerate = ReturnType<typeof makePrisma>;

declare global {
  var __prisma: PrismaWithAccelerate | undefined;
}

export function getPrisma(): PrismaWithAccelerate {
  if (!globalThis.__prisma) {
    globalThis.__prisma = makePrisma();
  }
  return globalThis.__prisma;
}
