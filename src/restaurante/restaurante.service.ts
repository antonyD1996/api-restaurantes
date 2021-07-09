import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurante } from './restaurante.interface';

@Injectable()
export class RestauranteService {
    constructor(@InjectModel('restaurantes') private readonly restauranteModel: Model<Restaurante>) { }

    async obtenerRestaurantes(): Promise<Restaurante[]> {
        return await this.restauranteModel.find();
    }

    async obtenerRestaurante(id: String): Promise<Restaurante> {
        let restaurante = await this.restauranteModel.findOne({ _id: id });
        return restaurante;
    }

    async crearRestaurante(restaurante: Restaurante): Promise<Restaurante> {
        const nuevo = new this.restauranteModel(restaurante);
        return await nuevo.save();
    }

    async actualizarRestaurante(id: string, restaurante: Restaurante): Promise<Restaurante> {
        return await this.restauranteModel.findByIdAndUpdate(id, restaurante, { new: true, useFindAndModify: false });
    }

    async eliminarRestaurante(id: string): Promise<Restaurante> {
        return await this.restauranteModel.findByIdAndRemove(id);
    }

}
