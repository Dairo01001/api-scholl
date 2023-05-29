import { ApiProperty } from '@nestjs/swagger';
export class StudentEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  documentNumber: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  secondSurname: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  RH: string;
}
