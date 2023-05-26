import { ApiProperty } from '@nestjs/swagger';
import { Student } from '@prisma/client';

export class StudentEntity implements Student {
  @ApiProperty({ type: String })
  photo: string;

  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  teacherId: number;

  @ApiProperty()
  status: boolean;
}
