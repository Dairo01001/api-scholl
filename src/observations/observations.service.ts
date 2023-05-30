import { Injectable } from '@nestjs/common';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObservationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createObservationDto: CreateObservationDto) {
    return this.prisma.observation.create({
      data: createObservationDto,
    });
  }

  findAll() {
    return this.prisma.observation.findMany({
      where: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.observation.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateObservationDto: UpdateObservationDto) {
    return this.prisma.observation.update({
      where: {
        id,
      },
      data: updateObservationDto,
    });
  }

  remove(id: number) {
    return this.prisma.observation.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
