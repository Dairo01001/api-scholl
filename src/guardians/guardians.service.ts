import { Injectable } from '@nestjs/common';
import { CreateGuardianDto } from './dto/create-guardian.dto';
import { UpdateGuardianDto } from './dto/update-guardian.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GuardiansService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGuardianDto: CreateGuardianDto) {
    return this.prisma.guardian.create({
      data: createGuardianDto,
    });
  }

  findAll() {
    return this.prisma.guardian.findMany({
      where: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.guardian.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateGuardianDto: UpdateGuardianDto) {
    return this.prisma.guardian.update({
      where: { id },
      data: updateGuardianDto,
    });
  }

  remove(id: number) {
    return this.prisma.guardian.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
