import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Role } from 'src/users/dto/create-user.dto';

@Injectable()
export class StudentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const { photo, teacherId, ...dataPerson } = createStudentDto;

    const newPerson = await this.prisma.person.create({
      data: dataPerson,
    });

    const newStudent = await this.prisma.student.create({
      data: {
        photo,
        teacherId,
        id: newPerson.id,
      },
    });

    await this.userService.create({
      password: newPerson.documentNumber,
      personId: newPerson.id,
      user: newPerson.documentNumber,
      role: Role.Student,
    });

    return newStudent;
  }

  findAll() {
    return this.prisma.student.findMany({});
  }

  findOne(id: number) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({
      where: { id },
    });
  }
}
