import { ApiProperty } from '@nestjs/swagger';
import { DocumentType } from '@prisma/client';

export class DocumentEntity implements DocumentType {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty()
  status: boolean;
}
