import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String })
  name: string;
}
