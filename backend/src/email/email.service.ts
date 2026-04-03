import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;
  private readonly emailUser: string;
  private readonly emailPass: string;

  constructor(private configService: ConfigService) {
    this.emailUser = this.configService.get<string>('EMAIL_USER') || '';
    this.emailPass = this.configService.get<string>('EMAIL_PASS') || '';

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: {
        user: this.emailUser,
        pass: this.emailPass,
      },
    });
  }

  async sendEmail(emailDto: SendEmailDto): Promise<boolean> {
    try {
      if (!this.emailUser || !this.emailPass) {
        throw new Error('Email service is not configured. Missing EMAIL_USER or EMAIL_PASS.');
      }

      this.logger.log(`Preparing transporter for ${emailDto.email}`);

      const mailOptions = {
        from: this.emailUser,
        to: 'lingalasuresh0606@gmail.com',
        replyTo: emailDto.email,
        subject: `Portfolio Contact: ${emailDto.subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${emailDto.name}</p>
          <p><strong>Email:</strong> ${emailDto.email}</p>
          <p><strong>Subject:</strong> ${emailDto.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${emailDto.message}</p>
        `,
      };

      this.logger.log(`Attempting SMTP send for ${emailDto.email}`);

      await this.transporter.sendMail(mailOptions);
      this.logger.log(`SMTP send completed for ${emailDto.email}`);
      return true;
    } catch (error) {
      this.logger.error('Error sending email', error instanceof Error ? error.stack : String(error));
      return false;
    }
  }
} 
