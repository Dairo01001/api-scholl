import { Module } from '@nestjs/common';
import { DayweeksService } from './dayweeks.service';
import { DayweeksController } from './dayweeks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DayweeksController],
  providers: [DayweeksService],
  imports: [PrismaModule],
})
export class DayweeksModule {}
