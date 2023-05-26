import { ApiProperty } from '@nestjs/swagger';
import { Degree } from '@prisma/client';

export class DegreeEntity implements Degree {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty()
  status: boolean;
}
