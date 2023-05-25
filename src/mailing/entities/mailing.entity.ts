import { ApiProperty } from '@nestjs/swagger';

export class Mailing {
  @ApiProperty()
  message: string;
}
