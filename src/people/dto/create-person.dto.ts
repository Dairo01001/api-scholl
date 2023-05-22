import { ApiProperty } from '@nestjs/swagger';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export class CreatePersonDto {
  @ApiProperty({ type: Number, minLength: 8 })
  documentNumber: number;

  @ApiProperty({ type: String })
  firstName: string;

  @ApiProperty({ required: false, type: String })
  middleName?: string;

  @ApiProperty({ type: String })
  surname: string;

  @ApiProperty({ required: false, type: String })
  secondSurname?: string;

  @ApiProperty({ examples: [Gender.Male, Gender.Female] })
  gender: Gender;

  @ApiProperty({ required: false, type: Number, minLength: 10 })
  phone?: number;

  @ApiProperty({ type: Number })
  documentTypeId: number;

  @ApiProperty({ type: Number })
  bloodTypeId: number;

  @ApiProperty({ type: Date })
  birthDate: Date;
}
