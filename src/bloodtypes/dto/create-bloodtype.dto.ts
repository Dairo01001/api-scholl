import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBloodtypeDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ type: String, required: true })
  name: string;
}
