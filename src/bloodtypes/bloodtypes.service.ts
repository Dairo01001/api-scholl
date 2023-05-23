import { Injectable } from '@nestjs/common';
import { CreateBloodtypeDto } from './dto/create-bloodtype.dto';
import { UpdateBloodtypeDto } from './dto/update-bloodtype.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BloodtypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBloodtypeDto: CreateBloodtypeDto) {
    return this.prisma.bloodType.create({
      data: createBloodtypeDto,
    });
  }

  findAll() {
    return this.prisma.bloodType.findMany({});
  }

  findOne(id: number) {
    return this.prisma.bloodType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBloodtypeDto: UpdateBloodtypeDto) {
    return this.prisma.bloodType.update({
      where: { id },
      data: updateBloodtypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.bloodType.delete({ where: { id } });
  }
}
