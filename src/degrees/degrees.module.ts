import { Module } from '@nestjs/common';
import { DegreesService } from './degrees.service';
import { DegreesController } from './degrees.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DegreesController],
  providers: [DegreesService],
  imports: [PrismaModule],
})
export class DegreesModule {}
