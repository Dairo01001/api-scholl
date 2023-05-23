import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { SubjectsdegreesService } from './subjectsdegrees.service';
import { CreateSubjectsdegreeDto } from './dto/create-subjectsdegree.dto';
import { UpdateSubjectsdegreeDto } from './dto/update-subjectsdegree.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SubjectsdegreeEntity } from './entities/subjectsdegree.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('subjectsdegrees')
@ApiTags('Asignaturas y Grados')
export class SubjectsdegreesController {
  constructor(
    private readonly subjectsdegreesService: SubjectsdegreesService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SubjectsdegreeEntity })
  async create(@Body() createSubjectsdegreeDto: CreateSubjectsdegreeDto) {
    return this.subjectsdegreesService.create(createSubjectsdegreeDto);
  }

  @Get()
  @ApiOkResponse({ type: SubjectsdegreeEntity, isArray: true })
  async findAll() {
    const subjectsDegrees = await this.subjectsdegreesService.findAll();
    return subjectsDegrees.map(
      (subjectDegree) => new SubjectsdegreeEntity(subjectDegree),
    );
  }

  @Get('unique')
  @ApiOkResponse({ type: SubjectsdegreeEntity })
  async findOne(
    @Query('degreeId', ParseIntPipe) degreeId: number,
    @Query('subjectId', ParseIntPipe) subjectId: number,
  ) {
    return new SubjectsdegreeEntity(
      await this.subjectsdegreesService.findOne({ degreeId, subjectId }),
    );
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubjectsdegreeEntity })
  async update(
    @Query('degreeId', ParseIntPipe) degreeId: number,
    @Query('subjectId', ParseIntPipe) subjectId: number,
    @Body() updateSubjectsdegreeDto: UpdateSubjectsdegreeDto,
  ) {
    return this.subjectsdegreesService.update(
      { degreeId, subjectId },
      updateSubjectsdegreeDto,
    );
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SubjectsdegreeEntity })
  remove(
    @Query('degreeId', ParseIntPipe) degreeId: number,
    @Query('subjectId', ParseIntPipe) subjectId: number,
  ) {
    return this.subjectsdegreesService.remove({ degreeId, subjectId });
  }
}
