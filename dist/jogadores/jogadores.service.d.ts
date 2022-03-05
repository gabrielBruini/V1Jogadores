import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    criarJogador(CriarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadorPeloId(_id: string): Promise<Jogador>;
    deletarJogador(_id: any): Promise<any>;
}
