import { Injectable } from '@nestjs/common';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeriodsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPeriodDto: CreatePeriodDto) {
    return this.prisma.period.create({
      data: createPeriodDto,
    });
  }

  findAll() {
    return this.prisma.period.findMany();
  }

  findOne(id: number) {
    return this.prisma.period.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePeriodDto: UpdatePeriodDto) {
    return this.prisma.period.update({
      where: {
        id,
      },
      data: updatePeriodDto,
    });
  }

  remove(id: number) {
    return this.prisma.period.delete({
      where: {
        id,
      },
    });
  }
}
