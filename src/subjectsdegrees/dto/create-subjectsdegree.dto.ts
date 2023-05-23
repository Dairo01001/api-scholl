import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateSubjectsdegreeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  degreeId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  subjectId: number;
}
