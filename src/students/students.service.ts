import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { Role } from 'src/users/dto/create-user.dto';
import { Prisma } from '@prisma/client';

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
    return this.prisma.$queryRaw(
      Prisma.sql`
      SELECT 
        ESTUDIANTE.ID_PERSONA AS id,
        ESTUDIANTE.FOTO_EST AS photo, 
        ESTUDIANTE.ESTADO_EST AS status,
        PERSONA.NUMERO_DOC_PER AS documentNumber,
        CONCAT(PERSONA.NOMBRE_UNO_PER, ' ', PERSONA.NOMBRE_DOS_PER, ' ', PERSONA.APELLIDO_UNO_PER, ' ', PERSONA.APELLIDO_DOS_PER) AS fullName,
        PERSONA.SEXO_PER AS gender,
        PERSONA.NUMERO_CONTACTO_PER AS phone,
        PERSONA.FECHA_NAC_PER AS birthDate,
        PERSONA.ESTADO_PER AS status,
        RH.NOMBRE_RH AS RH
      FROM 
        ESTUDIANTE
      JOIN PERSONA 
        ON ESTUDIANTE.ID_PERSONA = PERSONA.ID_PERSONA
      JOIN RH 
        ON PERSONA.ID_RH = RH.ID_RH
      ORDER BY ESTUDIANTE.ID_PERSONA ASC;
      `,
    );
  }

  async findOne(id: number) {
    const student = await this.prisma.$queryRaw(
      Prisma.sql`
      SELECT 
        ESTUDIANTE.ID_PERSONA AS id,
        ESTUDIANTE.FOTO_EST AS photo, 
        ESTUDIANTE.ESTADO_EST AS status,
        PERSONA.NUMERO_DOC_PER AS documentNumber, 
        PERSONA.NOMBRE_UNO_PER AS firstName, 
        PERSONA.NOMBRE_DOS_PER AS middleName, 
        PERSONA.APELLIDO_UNO_PER AS surname,
        PERSONA.APELLIDO_DOS_PER AS secondSurname,
        PERSONA.SEXO_PER AS gender,
        PERSONA.NUMERO_CONTACTO_PER AS phone,
        PERSONA.FECHA_NAC_PER AS birthDate,
        PERSONA.ESTADO_PER AS status,
        RH.NOMBRE_RH AS RH
      FROM 
        ESTUDIANTE
      JOIN
        PERSONA
      ON
        ESTUDIANTE.ID_PERSONA = PERSONA.ID_PERSONA
      JOIN
        RH
      ON
        PERSONA.ID_RH = RH.ID_RH
      WHERE 
        ESTUDIANTE.ID_PERSONA = ${id};
      `,
    );

    if (!student[0]) {
      throw new NotFoundException(`Student whit id ${id} not found!.`);
    }

    return student[0];
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
