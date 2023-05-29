import { Module } from '@nestjs/common';
import { ObservationsService } from './observations.service';
import { ObservationsController } from './observations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ObservationsController],
  providers: [ObservationsService],
  imports: [PrismaModule],
})
export class ObservationsModule {}
