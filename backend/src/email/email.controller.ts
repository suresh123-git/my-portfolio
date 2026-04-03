import { Controller, Post, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller('api/email')
export class EmailController {
  private readonly logger = new Logger(EmailController.name);

  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() emailDto: SendEmailDto) {
    try {
      this.logger.log(`Received contact request from ${emailDto.email} with subject "${emailDto.subject}"`);
      const success = await this.emailService.sendEmail(emailDto);
      if (!success) {
        throw new HttpException('Failed to send email', HttpStatus.INTERNAL_SERVER_ERROR);
      }
      this.logger.log(`Email sent successfully for ${emailDto.email}`);
      return { message: 'Email sent successfully' };
    } catch (error) {
      this.logger.error(`Email send failed for ${emailDto.email}`, error?.stack);
      throw new HttpException(
        error.message || 'Failed to send email',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
} 
