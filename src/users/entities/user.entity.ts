import { ApiProperty } from '@nestjs/swagger';
import { Role, User, UserStatus } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  user: string;

  @Exclude()
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

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
