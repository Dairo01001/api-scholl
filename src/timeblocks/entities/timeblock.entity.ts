import { ApiProperty } from '@nestjs/swagger';
import { TimeBlock } from '@prisma/client';

export class TimeblockEntity implements TimeBlock {
  @ApiProperty()
  id: number;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  status: boolean;
}
