import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;

  @IsNumber()
  @ApiProperty({ type: Number })
  percenScore: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  periodId: number;

  @IsNumber()
  @ApiProperty({ type: Number })
  subjectId: number;
}
