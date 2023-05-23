import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DegreesService } from './degrees.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DegreeEntity } from './entities/degree.entity';

@Controller('degrees')
@ApiTags('Grados')
export class DegreesController {
  constructor(private readonly degreesService: DegreesService) {}

  @Post()
  @ApiCreatedResponse({ type: DegreeEntity })
  create(@Body() createDegreeDto: CreateDegreeDto) {
    return this.degreesService.create(createDegreeDto);
  }

  @Get()
  @ApiOkResponse({ type: DegreeEntity, isArray: true })
  findAll() {
    return this.degreesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DegreeEntity })
  findOne(@Param('id') id: string) {
    return this.degreesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: DegreeEntity })
  update(@Param('id') id: string, @Body() updateDegreeDto: UpdateDegreeDto) {
    return this.degreesService.update(+id, updateDegreeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: DegreeEntity })
  remove(@Param('id') id: string) {
    return this.degreesService.remove(+id);
  }
}
