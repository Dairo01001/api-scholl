import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { BloodtypesService } from './bloodtypes.service';
import { CreateBloodtypeDto } from './dto/create-bloodtype.dto';
import { UpdateBloodtypeDto } from './dto/update-bloodtype.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BloodtypeEntity } from './entities/bloodtype.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('bloodtypes')
@ApiTags('Tipos de Sangre')
export class BloodtypesController {
  constructor(private readonly bloodtypesService: BloodtypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: BloodtypeEntity })
  create(@Body() createBloodtypeDto: CreateBloodtypeDto) {
    return this.bloodtypesService.create(createBloodtypeDto);
  }

  @Get()
  @ApiOkResponse({ type: BloodtypeEntity, isArray: true })
  findAll() {
    return this.bloodtypesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BloodtypeEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bloodtypesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: BloodtypeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBloodtypeDto: UpdateBloodtypeDto,
  ) {
    return this.bloodtypesService.update(id, updateBloodtypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: BloodtypeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bloodtypesService.remove(id);
  }
}
