import { Module } from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { PeriodsController } from './periods.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PeriodsController],
  providers: [PeriodsService],
  imports: [PrismaModule],
})
export class PeriodsModule {}
