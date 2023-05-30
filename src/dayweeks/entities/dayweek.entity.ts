import { ApiProperty } from '@nestjs/swagger';
import { DayWeek } from '@prisma/client';

export class DayweekEntity implements DayWeek {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  status: boolean;
}
