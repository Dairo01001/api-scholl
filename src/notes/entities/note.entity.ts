import { ApiProperty } from '@nestjs/swagger';
import { Note } from '@prisma/client';

export class NoteEntity implements Note {
  @ApiProperty()
  id: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  percenScore: number;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  periodId: number;

  @ApiProperty()
  subjectId: number;

  @ApiProperty()
  studentId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
