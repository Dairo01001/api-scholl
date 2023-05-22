import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, MinLength } from 'class-validator';

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @ApiProperty({ type: String, required: false })
  password: string;

  @IsDateString()
  @ApiProperty({ type: Date, required: false })
  endDate: Date;

  @IsString()
  @ApiProperty({
    type: String,
    required: false,
    examples: [Status.Active, Status.Inactive],
  })
  status: Status;
}
