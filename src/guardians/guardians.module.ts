import { Module } from '@nestjs/common';
import { GuardiansService } from './guardians.service';
import { GuardiansController } from './guardians.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GuardiansController],
  providers: [GuardiansService],
  imports: [PrismaModule],
})
export class GuardiansModule {}
