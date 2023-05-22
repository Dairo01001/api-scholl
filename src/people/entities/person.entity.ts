import { ApiProperty } from '@nestjs/swagger';
import { Gender, Person } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class PersonEntity implements Person {
  constructor({ user, ...data }: Partial<PersonEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  documentNumber: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty({ required: false, nullable: true })
  middleName: string | null;

  @ApiProperty()
  surname: string;

  @ApiProperty({ required: false, nullable: true })
  secondSurname: string | null;

  @ApiProperty()
  gender: Gender;

  @ApiProperty({ required: false, nullable: true })
  phone: number | null;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  documentTypeId: number;

  @ApiProperty()
  bloodTypeId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;
}
