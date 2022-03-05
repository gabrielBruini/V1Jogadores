"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesafiosController = void 0;
const common_1 = require("@nestjs/common");
const desafios_service_1 = require("./desafios.service");
const criar_desafio_dto_1 = require("./dtos/criar-desafio.dto");
let DesafiosController = class DesafiosController {
    constructor(desafiosService) {
        this.desafiosService = desafiosService;
    }
    async criarDesafio(criarDesafioDto) {
        return await this.desafiosService.criarDesafio(criarDesafioDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_desafio_dto_1.CriarDesafioDto]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "criarDesafio", null);
DesafiosController = __decorate([
    (0, common_1.Controller)('desafios'),
    __metadata("design:paramtypes", [desafios_service_1.DesafiosService])
], DesafiosController);
exports.DesafiosController = DesafiosController;
//# sourceMappingURL=desafios.controller.js.map