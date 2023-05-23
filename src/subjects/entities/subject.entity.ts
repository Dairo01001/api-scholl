import { ApiProperty } from '@nestjs/swagger';
import { Subject } from '@prisma/client';

export class SubjectEntity implements Subject {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;
}
