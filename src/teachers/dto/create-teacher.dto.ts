import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';

export class CreateTeacherDto extends CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String, required: true })
  profession: string;
}
