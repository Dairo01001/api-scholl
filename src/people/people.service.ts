import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Role } from 'src/users/dto/create-user.dto';

@Injectable()
export class PeopleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const person = await this.prisma.person.create({ data: createPersonDto });

    await this.usersService.create({
      user: person.documentNumber.toString(),
      password: person.documentNumber.toString(),
      personId: person.id,
      role: Role.Teacher,
    });

    return person;
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
