import { Injectable } from '@nestjs/common';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DegreesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDegreeDto: CreateDegreeDto) {
    return this.prisma.degree.create({
      data: createDegreeDto,
    });
  }

  findAll() {
    return this.prisma.degree.findMany({});
  }

  findOne(id: number) {
    return this.prisma.degree.findUnique({
      where: { id },
      include: {
        subjects: {
          include: {
            subject: true,
          },
        },
      },
    });
  }

  update(id: number, updateDegreeDto: UpdateDegreeDto) {
    return this.prisma.degree.update({ where: { id }, data: updateDegreeDto });
  }

  remove(id: number) {
    return this.prisma.degree.delete({ where: { id } });
  }
}
