import { ApiProperty } from '@nestjs/swagger';
import { Schedule } from '@prisma/client';

export class ScheduleEntity implements Schedule {
  @ApiProperty()
  id: number;

  @ApiProperty()
  year: number;

  @ApiProperty()
  time: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  dayWeekId: number;

  @ApiProperty()
  timeBlockId: number;

  @ApiProperty()
  subjectId: number;
}
