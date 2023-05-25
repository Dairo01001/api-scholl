import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AttendancesController],
  providers: [AttendancesService],
  imports: [PrismaModule],
})
export class AttendancesModule {}
