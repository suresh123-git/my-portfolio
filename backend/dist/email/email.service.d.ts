import { ConfigService } from '@nestjs/config';
import { SendEmailDto } from './dto/send-email.dto';
export declare class EmailService {
    private configService;
    private transporter;
    constructor(configService: ConfigService);
    sendEmail(emailDto: SendEmailDto): Promise<boolean>;
}
