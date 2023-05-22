import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService],
  imports: [PrismaModule, UsersModule],
})
export class TeachersModule {}
