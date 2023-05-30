import { PartialType } from '@nestjs/swagger';
import { CreateDayweekDto } from './create-dayweek.dto';

export class UpdateDayweekDto extends PartialType(CreateDayweekDto) {}
