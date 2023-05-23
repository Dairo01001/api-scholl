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

  await prisma.documentType.createMany({
    data: [
      { name: 'Tarjeta de Identidad' },
      { name: 'Cedula de Ciudadania' },
      { name: 'Registro Civil' },
    ],
    skipDuplicates: true,
  });

  await prisma.bloodType.createMany({
    data: [
      { name: 'A+' },
      { name: 'A-' },
      { name: 'B+' },
      { name: 'B-' },
      { name: 'AB+' },
      { name: 'AB-' },
      { name: 'O+' },
      { name: 'O-' },
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
