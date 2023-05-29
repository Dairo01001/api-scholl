import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({
      data: createNoteDto,
    });
  }

  findAll() {
    return this.prisma.note.findMany({
      where: {
        status: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.note.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.prisma.note.update({
      where: {
        id,
      },
      data: updateNoteDto,
    });
  }

  remove(id: number) {
    return this.prisma.note.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
