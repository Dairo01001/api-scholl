import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetAllQueryAttendance } from './dto/listquery-attendance.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttendancesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAttendanceDto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: createAttendanceDto,
    });
  }

  findAll(query: GetAllQueryAttendance) {
    if (query.limit) {
      return this.prisma.$queryRaw(
        Prisma.sql`
        SELECT ASISTENCIA.ID_ASISTENCIA AS id, ASISTENCIA.FECHA_ASIS AS date
        FROM ASISTENCIA
        ORDER BY ASISTENCIA.FECHA_ASIS ASC
        LIMIT = ${query.limit};
        `,
      );
    }
    return this.prisma.attendance.findMany({});
  }

  findOne(id: number) {
    return this.prisma.attendance.findUnique({
      where: { id },
    });
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return this.prisma.attendance.update({
      where: {
        id,
      },
      data: updateAttendanceDto,
    });
  }

  remove(id: number) {
    return this.prisma.attendance.delete({
      where: { id },
    });
  }
}
