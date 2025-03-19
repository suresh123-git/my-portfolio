"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('email', () => ({
    user: process.env['EMAIL_USER'] || '',
    pass: process.env['EMAIL_PASS'] || '',
    port: parseInt(process.env['PORT'] || '3000', 10),
}));
//# sourceMappingURL=email.config.js.map