import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://yopierr:SspkKjUKJpuIWVmj@cluster0.seydc.mongodb.net/smartrank?retryWrites=true&w=majority"),
    
    JogadoresModule,
    
    CategoriasModule,
    
    DesafiosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

/*
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}

*/
