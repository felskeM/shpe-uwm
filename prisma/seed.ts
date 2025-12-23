import bcrypt from 'bcryptjs';
import { PrismaClient } from '../app/generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const prisma = new PrismaClient().$extends(withAccelerate());

const DEFAULT_PASSWORD = 'ChangeMe2025!';
const boardMembers = [
  { role: 'President', name: 'Diego Sarmiento', email: 'president@shpeuwm.org' },
  { role: 'Vice President', name: 'Erick Covarrubias', email: 'vicepresident@shpeuwm.org' },
  { role: 'Treasurer', name: 'Amanda Chavez', email: 'treasurer@shpeuwm.org' },
  { role: 'Secretary', name: 'Jesus Garcia Rodriguez', email: 'secretary@shpeuwm.org' },
  {
    role: 'Social Media Coordinator',
    name: 'Ismael Ovalle Castorena',
    email: 'socialmedia1@shpeuwm.org',
  },
  { role: 'Social Media Coordinator', name: 'Flavio Ibarra', email: 'socialmedia2@shpeuwm.org' },
  { role: 'Recruiter', name: 'Gabriella Davila Albor', email: 'recruiter@shpeuwm.org' },
  { role: 'Webmaster', name: 'Mateo Felske', email: 'webmaster@shpeuwm.org' },
];

async function main() {
  const passwordHash = await bcrypt.hash(DEFAULT_PASSWORD, 12);

  for (const member of boardMembers) {
    await prisma.user.upsert({
      where: { email: member.email },
      update: { name: member.name, role: 'officer' },
      create: {
        email: member.email,
        name: member.name,
        role: 'officer',
        passwordHash,
      },
    });

    console.log(`✓ Seeded ${member.role}: ${member.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
