import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeopleService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPersonDto: CreatePersonDto) {
    return this.prisma.person.create({ data: createPersonDto });
  }

  findAll() {
    return this.prisma.person.findMany({});
  }

  findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id } });
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({ where: { id }, data: updatePersonDto });
  }

  remove(id: number) {
    return this.prisma.person.update({
      where: { id },
      data: {
        user: {
          update: {
            endDate: new Date().toISOString(),
            status: 'Inactive',
          },
        },
      },
    });
  }
}
