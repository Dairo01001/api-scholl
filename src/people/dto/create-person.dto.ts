import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  MinLength,
} from 'class-validator';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class CreatePersonDto {
  @IsNumberString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ type: String, minLength: 8 })
  documentNumber: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ required: false, type: String })
  middleName?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ type: String })
  surname: string;

  @IsString()
  @ApiProperty({ required: false, type: String })
  secondSurname?: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Gender)
  @ApiProperty({ examples: [Gender.Male, Gender.Female] })
  gender: Gender;

  @IsNumberString()
  @ApiProperty({ required: false, type: String, minLength: 10 })
  phone?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  documentTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  bloodTypeId: number;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ type: Date })
  birthDate: Date;
}
