import { ApiProperty } from '@nestjs/swagger';
import { Guardian } from '@prisma/client';

export class GuardianEntity implements Guardian {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  firstName: string;

  @ApiProperty({ type: String })
  middleName: string;

  @ApiProperty({ type: String })
  surname: string;

  @ApiProperty({ type: String })
  secondSurname: string;

  @ApiProperty({ type: String })
  phone: string;

  @ApiProperty({ type: Boolean })
  status: boolean;
}
