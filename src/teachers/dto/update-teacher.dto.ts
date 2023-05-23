import { PartialType, PickType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';

export class UpdateTeacherDto extends PartialType(
  PickType(CreateTeacherDto, ['email', 'profession']),
) {}
