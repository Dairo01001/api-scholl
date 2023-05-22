import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PersonEntity } from './entities/person.entity';

@Controller('people')
@ApiTags('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  @ApiCreatedResponse({ type: PersonEntity })
  async create(@Body() createPersonDto: CreatePersonDto) {
    return new PersonEntity(await this.peopleService.create(createPersonDto));
  }

  @Get()
  @ApiOkResponse({ type: PersonEntity, isArray: true })
  async findAll() {
    const people = await this.peopleService.findAll();
    return people.map((person) => new PersonEntity(person));
  }

  @Get(':id')
  @ApiOkResponse({ type: PersonEntity })
  findOne(@Param('id') id: string) {
    return this.peopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(+id);
  }
}
