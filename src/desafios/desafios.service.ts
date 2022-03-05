import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(@InjectModel('Desafio') private readonly desafiosModel: Model<Desafio>, private readonly jogadoresService:JogadoresService ) {}

    async criarDesafio(criarDesafioDto: CriarDesafioDto) {
        await this.jogadoresService.consultarJogadorPeloId(criarDesafioDto.jogadores[0].id)
    }


}
