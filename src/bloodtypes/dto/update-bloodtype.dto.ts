import { PartialType } from '@nestjs/swagger';
import { CreateBloodtypeDto } from './create-bloodtype.dto';

export class UpdateBloodtypeDto extends PartialType(CreateBloodtypeDto) {}
