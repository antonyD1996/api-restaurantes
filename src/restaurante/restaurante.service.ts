import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurante } from './restaurante.interface';
import { Opinion } from 'src/opinion/opinion.interface';

@Injectable()
export class RestauranteService {
    constructor(@InjectModel('restaurantes') private readonly restauranteModel: Model<Restaurante>) { }

    async obtenerTodos(): Promise<Restaurante[]> {
        return await this.restauranteModel.find();
    }

    async obtenerUno(id: String): Promise<Restaurante> {
        return await this.restauranteModel.findOne({ _id: id });
    }

    async crear(restaurante: Restaurante): Promise<Restaurante> {
        const nuevo = new this.restauranteModel(restaurante);
        return await nuevo.save();
    }

    async agregarOpinion(id: string, opinion: Opinion): Promise<Restaurante> {
        const restaurante = await this.restauranteModel.findOne({ _id: id })
        restaurante.Opiniones.push(opinion);
        await this.restauranteModel.findByIdAndUpdate(id, restaurante, { useFindAndModify: false });
        return restaurante;
    }

}
