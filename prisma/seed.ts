import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.dayWeek.createMany({
    data: [
      { name: 'Lunes' },
      { name: 'Martes' },
      { name: 'Miercoles' },
      { name: 'Jueves' },
      { name: 'Viernes' },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
