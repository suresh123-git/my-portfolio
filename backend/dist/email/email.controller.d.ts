import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(emailDto: SendEmailDto): Promise<{
        message: string;
    }>;
}
