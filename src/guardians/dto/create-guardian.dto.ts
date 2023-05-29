import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateGuardianDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  surname: string;

  @ApiProperty()
  secondSurname: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;
}
