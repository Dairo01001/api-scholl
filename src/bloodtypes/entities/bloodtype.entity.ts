import { ApiProperty } from '@nestjs/swagger';
import { BloodType } from '@prisma/client';

export class BloodtypeEntity implements BloodType {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty()
  status: boolean;
}
