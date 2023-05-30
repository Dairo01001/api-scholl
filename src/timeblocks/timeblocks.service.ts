import { Injectable } from '@nestjs/common';
import { CreateTimeblockDto } from './dto/create-timeblock.dto';
import { UpdateTimeblockDto } from './dto/update-timeblock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TimeblocksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTimeblockDto: CreateTimeblockDto) {
    return this.prisma.timeBlock.create({
      data: createTimeblockDto,
    });
  }

  findAll() {
    return this.prisma.timeBlock.findMany({
      where: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.timeBlock.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTimeblockDto: UpdateTimeblockDto) {
    return this.prisma.timeBlock.update({
      where: {
        id,
      },
      data: updateTimeblockDto,
    });
  }

  remove(id: number) {
    return this.prisma.timeBlock.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
