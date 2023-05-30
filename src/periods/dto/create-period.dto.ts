import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePeriodDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  number: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  endDate: Date;
}
