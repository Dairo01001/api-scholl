import { ApiProperty } from '@nestjs/swagger';
import { GroupStatus } from '@prisma/client';
import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @ApiProperty({ type: String, enum: GroupStatus })
  status: GroupStatus = GroupStatus.Active;

  @IsNumber()
  @ApiProperty({ type: Number })
  year: number;

  @IsString()
  @MinLength(5)
  @ApiProperty({ type: String })
  name: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  degreeId: number;
}
