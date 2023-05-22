import { ApiProperty } from '@nestjs/swagger';
import { Role, User, UserStatus } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  user: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty({ required: false, nullable: true })
  endDate: Date | null;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  status: UserStatus;

  @ApiProperty()
  personId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
