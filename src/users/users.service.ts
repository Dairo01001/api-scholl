import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  async findOne(personId: number) {
    const user = await this.prisma.user.findUnique({ where: { personId } });
    if (!user) {
      throw new NotFoundException(`User with ${personId} does not exist.`);
    }
    return user;
  }

  async update(personId: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prisma.user.update({
        where: { personId },
        data: updateUserDto,
      });
    } catch (error) {
      throw new NotFoundException(`User with ${personId} does not exist.`);
    }
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
