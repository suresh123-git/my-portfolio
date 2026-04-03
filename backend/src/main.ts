import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const explicitOrigins = [
    'https://sureshl-portfolio.netlify.app',
    process.env.FRONTEND_URL,
  ].filter((origin): origin is string => Boolean(origin));

  const allowedOriginPatterns = [
    /^http:\/\/localhost:\d+$/,
    /^http:\/\/127\.0\.0\.1:\d+$/,
    /^https:\/\/.*--sureshl-portfolio\.netlify\.app$/,
    /^https:\/\/.*\.netlify\.app$/,
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (
        !origin ||
        explicitOrigins.includes(origin) ||
        allowedOriginPatterns.some((pattern) => pattern.test(origin))
      ) {
        callback(null, true);
        return;
      }

      callback(new Error('Not allowed by CORS'));
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Backend listening on port ${port}`);
}
bootstrap(); 
