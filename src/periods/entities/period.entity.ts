import { ApiProperty } from '@nestjs/swagger';
import { Period } from '@prisma/client';

export class PeriodEntity implements Period {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  number: number;

  @ApiProperty({ type: Date })
  startDate: Date;

  @ApiProperty({ type: Date })
  endDate: Date;
}
