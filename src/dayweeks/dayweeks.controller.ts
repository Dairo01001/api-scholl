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
import { DayweeksService } from './dayweeks.service';
import { CreateDayweekDto } from './dto/create-dayweek.dto';
import { UpdateDayweekDto } from './dto/update-dayweek.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DayweekEntity } from './entities/dayweek.entity';

@Controller('dayweeks')
@ApiTags('Dias Semana')
export class DayweeksController {
  constructor(private readonly dayweeksService: DayweeksService) {}

  @Post()
  @ApiCreatedResponse({ type: DayweekEntity })
  create(@Body() createDayweekDto: CreateDayweekDto) {
    return this.dayweeksService.create(createDayweekDto);
  }

  @Get()
  @ApiOkResponse({ type: DayweekEntity, isArray: true })
  findAll() {
    return this.dayweeksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DayweekEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dayweeksService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DayweekEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDayweekDto: UpdateDayweekDto,
  ) {
    return this.dayweeksService.update(id, updateDayweekDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DayweekEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dayweeksService.remove(id);
  }
}
