import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty()
  year: number;

  @ApiProperty({ type: String, example: '1:30' })
  time: string;

  @ApiProperty()
  dayWeekId: number;

  @ApiProperty()
  timeBlockId: number;

  @ApiProperty()
  subjectId: number;
}
