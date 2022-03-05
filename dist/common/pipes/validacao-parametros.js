"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresPipe = void 0;
const common_1 = require("@nestjs/common");
class JogadoresPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O valor do parametro ${metadata.data} deve ser informado`);
        }
        return value;
    }
}
exports.JogadoresPipe = JogadoresPipe;
//# sourceMappingURL=validacao-parametros.js.map