import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
// import { OpinionModule } from './opinion/opinion.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [RestauranteModule/*, OpinionModule*/,
    MongooseModule.forRoot('mongodb+srv://antony:andaduper2096@cluster0.0hgy6.mongodb.net/restaurante?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
