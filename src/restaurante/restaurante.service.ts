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

    async obtenerTodosResumen(): Promise<Restaurante[]> {
        const resumen = await this.restauranteModel.aggregate([{
            $unwind: '$Opiniones'
        }, {
            $group: {
                _id: {
                    restaurante: "$Nombre"
                },
                promedio: { $avg: '$Opiniones.Puntuacion' },
                mayor: { $max: '$Opiniones.Puntuacion' },
                menor: { $min: '$Opiniones.Puntuacion' }
            }
        }, {
            $project: {
                _id: '$_id',
                Calificacion: { $round: ['$puntuacion', 2] },
                'Mayor Puntuacion': '$mayor',
                'Menor Puntuacion': '$menor'

            }
        }
        ])
        return resumen
    }

    async obtenerUno(id: String): Promise<Restaurante> {
        let restaurante = await this.restauranteModel.findOne({ _id: id });
        return restaurante;
    }

    async obtenerUnoResumen(id: String): Promise<Restaurante> {
        let restaurante = await this.restauranteModel.findOne({ _id: id });
        const restaurantes = await this.restauranteModel.aggregate([{ $unwind: '$Opiniones' }, {
            $match: { Nombre: { $eq: restaurante.Nombre } }
        }, {
            $sort: {
                "Opiniones.Puntuacion": -1
            }
        }, {
            $group: {
                _id: {
                    Restaurante: "$Nombre"
                },
                avg: { $avg: '$Opiniones.Puntuacion' },
                mayor: { $first: '$Opiniones' },
                menor: { $last: '$Opiniones' }
            },

        }, {
            $project: {
                _id: '$_id',
                Calificacion: { $round: ['$avg', 2] },
                'Mayor Puntuacion': '$mayor',
                'Menor Puntuacion': '$menor'

            }
        }])
        return restaurantes[0];
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
