import { PrismaClient } from '../app/generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

export function getPrisma() {
  return new PrismaClient().$extends(withAccelerate());
}
