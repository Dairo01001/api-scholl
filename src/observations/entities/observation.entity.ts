import { ApiProperty } from '@nestjs/swagger';
import { Observation } from '@prisma/client';

export class ObservationEntity implements Observation {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Date })
  date: Date;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Boolean })
  status: boolean;

  @ApiProperty({ type: Number })
  studentId: number;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;
}
