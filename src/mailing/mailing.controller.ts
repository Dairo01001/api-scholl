import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MailingService } from './mailing.service';
import { SendEmailDto } from './dto/sent-email.dto';
import { Mailing } from './entities/mailing.entity';

@Controller('mailing')
@ApiTags('Enviar Mensajes')
export class MailingController {
  constructor(private readonly mailingService: MailingService) {}

  @Post()
  @ApiOkResponse({ type: Mailing })
  sendEmail(@Body() sendEmailDto: SendEmailDto) {
    return this.mailingService.sendEmail(sendEmailDto);
  }
}
