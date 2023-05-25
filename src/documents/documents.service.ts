import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentDto: CreateDocumentDto) {
    return this.prisma.documentType.create({
      data: createDocumentDto,
    });
  }

  findAll() {
    return this.prisma.$queryRaw(
      Prisma.sql`
      SELECT DOCUMENTO.ID_DOCUMENTO AS id, DOCUMENTO.TIPO_DOC AS name
      FROM DOCUMENTO
      ORDER BY DOCUMENTO.ID_DOCUMENTO ASC;
      `,
    );
  }

  async findOne(id: number) {
    const res = await this.prisma.$queryRaw(
      Prisma.sql`
      SELECT DOCUMENTO.ID_DOCUMENTO AS id, DOCUMENTO.TIPO_DOC AS name
      FROM DOCUMENTO
      WHERE DOCUMENTO.ID_DOCUMENTO = ${id}
      ORDER BY DOCUMENTO.ID_DOCUMENTO DESC;
      `,
    );

    if (res[0]) {
      return res[0];
    }

    throw new NotFoundException(`Document with ${id} does not exist.`);
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return this.prisma.documentType.update({
      where: { id },
      data: updateDocumentDto,
    });
  }

  remove(id: number) {
    return this.prisma.documentType.delete({ where: { id } });
  }
}
