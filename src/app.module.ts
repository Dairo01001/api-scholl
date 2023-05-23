import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { BloodtypesModule } from './bloodtypes/bloodtypes.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { DegreesModule } from './degrees/degrees.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SubjectsdegreesModule } from './subjectsdegrees/subjectsdegrees.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PeopleModule,
    AuthModule,
    DocumentsModule,
    BloodtypesModule,
    TeachersModule,
    StudentsModule,
    DegreesModule,
    SubjectsModule,
    SubjectsdegreesModule,
  ],
})
export class AppModule {}
