import { ApiProperty } from '@nestjs/swagger';
import { Attendance } from '@prisma/client';

export class AttendanceEntity implements Attendance {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Date })
  date: Date;
}
