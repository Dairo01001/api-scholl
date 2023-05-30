import { Module } from '@nestjs/common';
import { TimeblocksService } from './timeblocks.service';
import { TimeblocksController } from './timeblocks.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TimeblocksController],
  providers: [TimeblocksService],
  imports: [PrismaModule],
})
export class TimeblocksModule {}
