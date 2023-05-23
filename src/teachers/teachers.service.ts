import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Role } from 'src/users/dto/create-user.dto';

@Injectable()
export class TeachersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const { password, profession, email, ...datePerson } = createTeacherDto;

    const newPerson = await this.prisma.person.create({
      data: datePerson,
    });

    const newTeacher = await this.prisma.teacher.create({
      data: {
        id: newPerson.id,
        email,
        profession,
      },
    });

    await this.userService.create({
      user: newPerson.documentNumber,
      personId: newPerson.id,
      role: Role.Teacher,
      password: password,
    });

    return newTeacher;
  }

  findAll() {
    return this.prisma.teacher.findMany({});
  }

  findOne(id: number) {
    return this.prisma.teacher.findUnique({ where: { id } });
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.prisma.teacher.update({
      where: { id },
      data: updateTeacherDto,
    });
  }

  remove(id: number) {
    return this.prisma.teacher.delete({ where: { id } });
  }
}