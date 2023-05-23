import { ApiProperty } from '@nestjs/swagger';
import { Gender, Person } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { DocumentEntity } from 'src/documents/entities/document.entity';
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
  documentNumber: string;

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
  phone: string | null;

  @ApiProperty()
  birthDate: Date;

  @Exclude()
  documentTypeId: number;

  @ApiProperty()
  bloodTypeId: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @ApiProperty({ required: false, type: UserEntity })
  user?: UserEntity;

  @ApiProperty({ required: false, type: DocumentEntity })
  documentType?: DocumentEntity;
}
