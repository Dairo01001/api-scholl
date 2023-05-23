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
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PersonEntity } from './entities/person.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('people')
@ApiTags('Personas')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiCreatedResponse({ type: PersonEntity })
  async create(@Body() createPersonDto: CreatePersonDto) {
    return new PersonEntity(await this.peopleService.create(createPersonDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonEntity, isArray: true })
  async findAll() {
    const people = await this.peopleService.findAll();
    return people.map((person) => new PersonEntity(person));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new PersonEntity(await this.peopleService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePersonDto: UpdatePersonDto,
  ) {
    return new PersonEntity(
      await this.peopleService.update(id, updatePersonDto),
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new PersonEntity(await this.peopleService.remove(id));
  }
}
