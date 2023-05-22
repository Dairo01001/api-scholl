import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PeopleModule } from './people/people.module';
import { AuthModule } from './auth/auth.module';
import { DocumentsModule } from './documents/documents.module';
import { BloodtypesModule } from './bloodtypes/bloodtypes.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PeopleModule,
    AuthModule,
    DocumentsModule,
    BloodtypesModule,
  ],
})
export class AppModule {}
