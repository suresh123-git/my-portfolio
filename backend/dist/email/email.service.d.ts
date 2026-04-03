import { ConfigService } from '@nestjs/config';
import { SendEmailDto } from './dto/send-email.dto';
export declare class EmailService {
    private configService;
    private readonly logger;
    private transporter;
    private readonly emailUser;
    private readonly emailPass;
    constructor(configService: ConfigService);
    sendEmail(emailDto: SendEmailDto): Promise<boolean>;
}
