import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PeriodEntity } from './entities/period.entity';

@Controller('periods')
@ApiTags('Periodos')
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) {}

  @Post()
  @ApiCreatedResponse({ type: PeriodEntity })
  create(@Body() createPeriodDto: CreatePeriodDto) {
    return this.periodsService.create(createPeriodDto);
  }

  @Get()
  @ApiOkResponse({ type: PeriodEntity, isArray: true })
  findAll() {
    return this.periodsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PeriodEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.periodsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PeriodEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePeriodDto: UpdatePeriodDto,
  ) {
    return this.periodsService.update(id, updatePeriodDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PeriodEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.periodsService.remove(id);
  }
}
