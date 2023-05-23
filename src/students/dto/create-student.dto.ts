import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';

export class CreateStudentDto extends CreatePersonDto {
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  photo: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  teacherId: number;
}
