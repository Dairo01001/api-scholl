import { ApiProperty } from '@nestjs/swagger';
import { SubjectsOnDegrees } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { DegreeEntity } from 'src/degrees/entities/degree.entity';
import { SubjectEntity } from 'src/subjects/entities/subject.entity';

export class SubjectsdegreeEntity implements SubjectsOnDegrees {
  constructor(partial: Partial<SubjectsdegreeEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: DegreeEntity })
  degree: DegreeEntity;

  @ApiProperty({ type: SubjectEntity })
  subject: SubjectEntity;

  @Exclude()
  degreeId: number;

  @Exclude()
  subjectId: number;
}
