import { ApiProperty } from '@nestjs/swagger';
import { Group, GroupStatus } from '@prisma/client';

export class GroupEntity implements Group {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String, enum: GroupStatus })
  status: GroupStatus;

  @ApiProperty({ type: Number })
  year: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: Number })
  degreeId: number;
}
