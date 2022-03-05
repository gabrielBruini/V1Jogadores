import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';

@Injectable()
export class JogadoresService {

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>) {}

    async criarJogador(CriarJogadorDto: CriarJogadorDto): Promise<Jogador>{

        const { email } = CriarJogadorDto

       const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec()

        if(jogadorEncontrado) {
            throw new BadRequestException(`Jogador com o email ${email} já cadastrado`)
            
        } else {
            const jogadorCriado = new this.jogadorModel(CriarJogadorDto)
            return await jogadorCriado.save()
        }
  

    }

    async atualizarJogador(_id:string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void>{

        
       const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec()

       if(!jogadorEncontrado) {
           throw new NotFoundException(`Usuário com o id: ${_id} não encontrado`)
       }       
        await this.jogadorModel.findOneAndUpdate({_id},
        {$set: atualizarJogadorDto}).exec()      
  

    }

    async consultarTodosJogadores(): Promise<Jogador[]> {
        return  await this.jogadorModel.find().exec()
    }

    async consultarJogadorPeloId(_id: string): Promise <Jogador> {       
        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec()
        if(jogadorEncontrado) {
            return jogadorEncontrado
        } else {
            throw new NotFoundException(`Jogador com Id: ${_id} não encontrado`)
        }
         

    }

    async deletarJogador(_id): Promise<any> {     

        const jogadorEncontrado = await this.jogadorModel.findOne({_id}).exec();

        if(jogadorEncontrado) {
            return await this.jogadorModel.findOneAndDelete({_id}).exec()
        }else {
            throw new NotFoundException(`Jogador com Id: ${_id} não encontrado`)
        }


      
    
    }

}
