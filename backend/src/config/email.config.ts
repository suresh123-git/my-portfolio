import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  user: process.env['EMAIL_USER'] || '',
  pass: process.env['EMAIL_PASS'] || '',
  port: parseInt(process.env['PORT'] || '3000', 10),
})); 