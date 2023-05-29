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
import { TimeblocksService } from './timeblocks.service';
import { CreateTimeblockDto } from './dto/create-timeblock.dto';
import { UpdateTimeblockDto } from './dto/update-timeblock.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TimeblockEntity } from './entities/timeblock.entity';

@Controller('timeblocks')
@ApiTags('Bloque de Hora')
export class TimeblocksController {
  constructor(private readonly timeblocksService: TimeblocksService) {}

  @Post()
  @ApiCreatedResponse({ type: TimeblockEntity })
  create(@Body() createTimeblockDto: CreateTimeblockDto) {
    return this.timeblocksService.create(createTimeblockDto);
  }

  @Get()
  @ApiOkResponse({ type: TimeblockEntity, isArray: true })
  findAll() {
    return this.timeblocksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TimeblockEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.timeblocksService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TimeblockEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTimeblockDto: UpdateTimeblockDto,
  ) {
    return this.timeblocksService.update(id, updateTimeblockDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TimeblockEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.timeblocksService.remove(id);
  }
}
