"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const explicitOrigins = [
        'https://sureshl-portfolio.netlify.app',
        process.env.FRONTEND_URL,
    ].filter((origin) => Boolean(origin));
    const allowedOriginPatterns = [
        /^http:\/\/localhost:\d+$/,
        /^http:\/\/127\.0\.0\.1:\d+$/,
        /^https:\/\/.*--sureshl-portfolio\.netlify\.app$/,
        /^https:\/\/.*\.netlify\.app$/,
    ];
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin ||
                explicitOrigins.includes(origin) ||
                allowedOriginPatterns.some((pattern) => pattern.test(origin))) {
                callback(null, true);
                return;
            }
            callback(new Error('Not allowed by CORS'));
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: false,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    logger.log(`Backend listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map