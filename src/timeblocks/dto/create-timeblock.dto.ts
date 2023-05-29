import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTimeblockDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ examples: ['08:00', '13:00'] })
  startTime: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ examples: ['08:00', '13:00'] })
  endTime: string;
}
