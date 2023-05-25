import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateAttendanceDto {
  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: Date })
  date: Date;
}
