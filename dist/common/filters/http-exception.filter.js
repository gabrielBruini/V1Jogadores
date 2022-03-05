"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
(0, common_1.Catch)();
class AllExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionsFilter.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof common_1.HttpException ? exception.getResponse() : exception;
        this.logger.error(`Http Status: ${status} Error Message: ${JSON.stringify(message)}`);
        response.status(status).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message
        });
    }
}
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=http-exception.filter.js.map