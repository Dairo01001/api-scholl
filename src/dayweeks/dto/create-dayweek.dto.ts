import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDayweekDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}
