import { PartialType, PickType } from '@nestjs/swagger';
import { CreateSubjectsdegreeDto } from './create-subjectsdegree.dto';

export class UpdateSubjectsdegreeDto extends PartialType(
  PickType(CreateSubjectsdegreeDto, ['description']),
) {}
