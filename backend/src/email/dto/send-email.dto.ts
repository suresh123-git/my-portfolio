import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SendEmailDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string = '';

  @IsEmail()
  @IsNotEmpty()
  email: string = '';

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  subject: string = '';

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  message: string = '';
} 