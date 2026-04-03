"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let EmailService = EmailService_1 = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(EmailService_1.name);
        this.emailUser = this.configService.get('EMAIL_USER') || '';
        this.emailPass = this.configService.get('EMAIL_PASS') || '';
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
    async sendEmail(emailDto) {
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
        }
        catch (error) {
            this.logger.error('Error sending email', error instanceof Error ? error.stack : String(error));
            return false;
        }
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map