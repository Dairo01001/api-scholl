import { Module } from '@nestjs/common';
import { SubjectsdegreesService } from './subjectsdegrees.service';
import { SubjectsdegreesController } from './subjectsdegrees.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SubjectsdegreesController],
  providers: [SubjectsdegreesService],
  imports: [PrismaModule],
})
export class SubjectsdegreesModule {}
