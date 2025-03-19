import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() emailDto: SendEmailDto) {
    try {
      const success = await this.emailService.sendEmail(emailDto);
      if (!success) {
        throw new HttpException('Failed to send email', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      return { message: 'Email sent successfully' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to send email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
} 