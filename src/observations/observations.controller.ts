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
import { ObservationsService } from './observations.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ObservationEntity } from './entities/observation.entity';

@Controller('observations')
@ApiTags('Observaciones')
export class ObservationsController {
  constructor(private readonly observationsService: ObservationsService) {}

  @Post()
  @ApiCreatedResponse({ type: ObservationEntity })
  create(@Body() createObservationDto: CreateObservationDto) {
    return this.observationsService.create(createObservationDto);
  }

  @Get()
  @ApiOkResponse({ type: ObservationEntity, isArray: true })
  findAll() {
    return this.observationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ObservationEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.observationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ObservationEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateObservationDto: UpdateObservationDto,
  ) {
    return this.observationsService.update(id, updateObservationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ObservationEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.observationsService.remove(id);
  }
}
