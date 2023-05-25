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
  Query,
} from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AttendanceEntity } from './entities/attendance.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetAllQueryAttendance } from './dto/listquery-attendance.dto';

@Controller('attendances')
@ApiTags('Asistencias')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Post()
  @ApiCreatedResponse({ type: AttendanceEntity })
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendancesService.create(createAttendanceDto);
  }

  @Get()
  @ApiOkResponse({ type: AttendanceEntity, isArray: true })
  findAll(@Query() query: GetAllQueryAttendance) {
    return this.attendancesService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: AttendanceEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.attendancesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AttendanceEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendancesService.update(id, updateAttendanceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AttendanceEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.attendancesService.remove(id);
  }
}
