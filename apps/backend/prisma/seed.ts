import { PrismaClient } from '@prisma/client';
import * as mocks from '@barba-brutal/core/mocks';

const prisma = new PrismaClient();

async function seed() {
  await prisma.professional.createMany({
    data: mocks.professionals,
  });

  await prisma.service.createMany({
    data: mocks.services,
  });
}

seed();
