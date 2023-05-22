import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

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
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          roundsOfHashing,
        );
      }

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
