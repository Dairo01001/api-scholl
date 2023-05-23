import { PartialType, PickType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(
  PickType(CreateStudentDto, ['photo', 'teacherId']),
) {}
