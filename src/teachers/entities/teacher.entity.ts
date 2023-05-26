import { ApiProperty } from '@nestjs/swagger';
import { Teacher } from '@prisma/client';

export class TeacherEntity implements Teacher {
  @ApiProperty()
  status: boolean;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: String })
  profession: string;

  @ApiProperty({ type: Number })
  id: number;
}
