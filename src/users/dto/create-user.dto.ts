import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export enum Role {
  Teacher = 'Teacher',
  Student = 'Student',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String })
  user: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ type: String })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
    default: Role.Student,
    examples: [Role.Teacher, Role.Student],
  })
  role?: Role = Role.Student;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ type: Number })
  personId: number;
}
