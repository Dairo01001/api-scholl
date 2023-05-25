import { ApiProperty } from '@nestjs/swagger';
import { Role, UserStatus } from '@prisma/client';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  role: Role;

  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty()
  status: UserStatus;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;
}
