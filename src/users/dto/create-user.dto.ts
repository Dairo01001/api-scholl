import { ApiProperty } from '@nestjs/swagger';

enum Role {
  Teacher = 'Teacher',
  Student = 'Student',
}

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export class CreateUserDto {
  @ApiProperty({ type: String })
  user: string;

  @ApiProperty({ type: String })
  password: string;

  @ApiProperty({ type: Date, required: false })
  startDate: Date;

  @ApiProperty({ type: Date, required: false })
  endDate: Date | null;

  @ApiProperty({
    required: false,
    default: Role.Student,
    examples: [Role.Teacher, Role.Student],
  })
  role?: Role = Role.Student;

  @ApiProperty({
    required: false,
    default: Status.Active,
    examples: [Status.Active, Status.Inactive],
  })
  status: Status = Status.Active;

  @ApiProperty({ type: Number })
  personId: number;
}
