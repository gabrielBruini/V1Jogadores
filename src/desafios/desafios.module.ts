import { Module } from '@nestjs/common';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { DesafiosController } from './desafios.controller';
import { DesafiosService } from './desafios.service';
import { DesafioSchema } from './interfaces/desafio.schema';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports:[MongooseModule.forFeature([{name: 'Desafio', schema: DesafioSchema}]), JogadoresModule],
  controllers: [DesafiosController],
  providers: [DesafiosService]
})
export class DesafiosModule {}
