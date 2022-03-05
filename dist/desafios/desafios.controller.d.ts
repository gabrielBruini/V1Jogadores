import { DesafiosService } from './desafios.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
export declare class DesafiosController {
    private readonly desafiosService;
    constructor(desafiosService: DesafiosService);
    criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<void>;
}
