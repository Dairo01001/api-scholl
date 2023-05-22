import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(personId: number) {
    return this.prisma.user.findUnique({ where: { personId } });
  }

  update(personId: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { personId },
      data: updateUserDto,
    });
  }

  remove(personId: number) {
    return this.prisma.user.update({
      where: { personId },
      data: {
        status: 'Inactive',
        endDate: new Date().toISOString(),
      },
    });
  }
}
