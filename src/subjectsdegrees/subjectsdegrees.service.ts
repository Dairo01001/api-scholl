import { Injectable } from '@nestjs/common';
import { CreateSubjectsdegreeDto } from './dto/create-subjectsdegree.dto';
import { UpdateSubjectsdegreeDto } from './dto/update-subjectsdegree.dto';
import { PrismaService } from 'src/prisma/prisma.service';

interface SubjectDegree {
  degreeId: number;
  subjectId: number;
}

@Injectable()
export class SubjectsdegreesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSubjectsdegreeDto: CreateSubjectsdegreeDto) {
    return this.prisma.subjectsOnDegrees.create({
      data: createSubjectsdegreeDto,
    });
  }

  findAll() {
    return this.prisma.subjectsOnDegrees.findMany({
      include: {
        degree: true,
        subject: true,
      },
    });
  }

  findOne({ subjectId, degreeId }: SubjectDegree) {
    return this.prisma.subjectsOnDegrees.findUnique({
      where: {
        degreeId_subjectId: {
          degreeId,
          subjectId,
        },
      },
      include: {
        degree: true,
        subject: true,
      },
    });
  }

  update(
    { degreeId, subjectId }: SubjectDegree,
    updateSubjectsdegreeDto: UpdateSubjectsdegreeDto,
  ) {
    return this.prisma.subjectsOnDegrees.update({
      where: {
        degreeId_subjectId: {
          degreeId,
          subjectId,
        },
      },
      data: updateSubjectsdegreeDto,
    });
  }

  remove({ degreeId, subjectId }: SubjectDegree) {
    return this.prisma.subjectsOnDegrees.delete({
      where: {
        degreeId_subjectId: {
          degreeId,
          subjectId,
        },
      },
    });
  }
}
