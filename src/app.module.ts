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
import { AttendancesModule } from './attendances/attendances.module';
import { MailingModule } from './mailing/mailing.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { GroupsModule } from './groups/groups.module';
import { ObservationsModule } from './observations/observations.module';
import { GuardiansModule } from './guardians/guardians.module';
import { PeriodsModule } from './periods/periods.module';
import { NotesModule } from './notes/notes.module';
import { DayweeksModule } from './dayweeks/dayweeks.module';
import { TimeblocksModule } from './timeblocks/timeblocks.module';

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
    AttendancesModule,
    MailingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: 'smtps://user@domain.com:pass@smtp.domain.com',
      template: {
        dir: join(process.cwd(), './templates/'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    GroupsModule,
    ObservationsModule,
    GuardiansModule,
    PeriodsModule,
    NotesModule,
    DayweeksModule,
    TimeblocksModule,
  ],
})
export class AppModule {}
