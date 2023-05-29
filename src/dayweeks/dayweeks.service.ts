import { Injectable } from '@nestjs/common';
import { CreateDayweekDto } from './dto/create-dayweek.dto';
import { UpdateDayweekDto } from './dto/update-dayweek.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DayweeksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDayweekDto: CreateDayweekDto) {
    return this.prisma.dayWeek.create({
      data: createDayweekDto,
    });
  }

  findAll() {
    return this.prisma.dayWeek.findMany({
      where: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.dayWeek.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateDayweekDto: UpdateDayweekDto) {
    return this.prisma.dayWeek.update({
      where: {
        id,
      },
      data: updateDayweekDto,
    });
  }

  remove(id: number) {
    return this.prisma.dayWeek.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
