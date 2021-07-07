import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestauranteSchema } from 'src/schemas/restaurante.schema';
import { RestauranteController } from './restaurante.controller';
import { RestauranteService } from './restaurante.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'restaurantes', schema: RestauranteSchema }])],
    providers: [RestauranteService],
    controllers: [RestauranteController]
})
export class RestauranteModule { }
