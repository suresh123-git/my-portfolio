import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendEmail(emailDto: SendEmailDto): Promise<boolean> {
    try {
      const mailOptions = {
        from: this.configService.get<string>('EMAIL_USER'),
        to: 'lingalasuresh0606@gmail.com',
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

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }
} 