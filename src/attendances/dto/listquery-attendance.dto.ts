import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetAllQueryAttendance {
  @ApiPropertyOptional({ type: Number })
  limit?: number;

  @ApiPropertyOptional({ type: Date })
  start?: Date;

  @ApiPropertyOptional({ type: Date })
  end?: Date;

  @ApiPropertyOptional({ type: Date })
  date?: Date;
}
