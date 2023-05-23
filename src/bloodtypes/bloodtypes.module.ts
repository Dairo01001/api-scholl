import { Module } from '@nestjs/common';
import { BloodtypesService } from './bloodtypes.service';
import { BloodtypesController } from './bloodtypes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BloodtypesController],
  providers: [BloodtypesService],
  imports: [PrismaModule],
})
export class BloodtypesModule {}
