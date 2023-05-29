import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateObservationDto {
  @IsDateString()
  @ApiProperty({ type: Date })
  date: Date;

  @IsString()
  @ApiProperty({ type: String })
  description: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  studentId: number;
}
