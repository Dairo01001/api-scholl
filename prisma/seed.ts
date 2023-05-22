import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordAdmin = await bcrypt.hash('12345', roundsOfHashing);

  const bloodTypeA = await prisma.bloodType.upsert({
    where: { name: 'A-' },
    update: {},
    create: {
      name: 'A-',
    },
  });

  const documentTypeCed = await prisma.documentType.upsert({
    where: { name: 'Cedula' },
    update: {},
    create: {
      name: 'Cedula',
    },
  });

  await prisma.person.upsert({
    where: { documentNumber: '1117531976' },
    update: {},
    create: {
      documentNumber: '1117531976',
      firstName: 'Dairo',
      surname: 'Garcia',
      secondSurname: 'Naranjo',
      bloodTypeId: bloodTypeA.id,
      documentTypeId: documentTypeCed.id,
      birthDate: '1994-04-25T05:24:30.259Z',
      gender: 'Male',
      phone: '3027485520',
      user: {
        create: {
          user: 'admin',
          password: passwordAdmin,
          role: 'Admin',
        },
      },
    },
  });

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
