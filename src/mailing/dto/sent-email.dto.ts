import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendEmailDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  to: string;

  @IsString()
  @ApiProperty()
  subject: string;

  @IsString()
  @ApiProperty()
  message: string;
}
