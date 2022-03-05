import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio } from './interfaces/desafio.interface';
export declare class DesafiosService {
    private readonly desafiosModel;
    private readonly jogadoresService;
    constructor(desafiosModel: Model<Desafio>, jogadoresService: JogadoresService);
    criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<void>;
}
