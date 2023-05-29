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
import { GuardiansService } from './guardians.service';
import { CreateGuardianDto } from './dto/create-guardian.dto';
import { UpdateGuardianDto } from './dto/update-guardian.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GuardianEntity } from './entities/guardian.entity';

@Controller('guardians')
@ApiTags('Acudientes')
export class GuardiansController {
  constructor(private readonly guardiansService: GuardiansService) {}

  @Post()
  @ApiCreatedResponse({ type: GuardianEntity })
  create(@Body() createGuardianDto: CreateGuardianDto) {
    return this.guardiansService.create(createGuardianDto);
  }

  @Get()
  @ApiOkResponse({ type: GuardianEntity, isArray: true })
  findAll() {
    return this.guardiansService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: GuardianEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.guardiansService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GuardianEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGuardianDto: UpdateGuardianDto,
  ) {
    return this.guardiansService.update(id, updateGuardianDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GuardianEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.guardiansService.remove(id);
  }
}
