import { Injectable } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurante } from './restaurante.interface';
import { Opinion } from 'src/opinion/opinion.interface';
import * as mongoose from 'mongoose'

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

    async agregarOpinion(id: string, opinion: Opinion): Promise<Restaurante> {
        const restaurante = await this.restauranteModel.findOne({ _id: id })
        restaurante.Opiniones.push(opinion);
        return await this.restauranteModel.findByIdAndUpdate(id, restaurante, { new: true, useFindAndModify: false });
    }

    async obtenerResumenRestaurantes(): Promise<Restaurante[]> {
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
                Calificacion: { $round: ['$promedio', 2] },
                'Mayor Puntuacion': '$mayor',
                'Menor Puntuacion': '$menor'

            }
        }
        ])
        return resumen
    }

    async obtenerResumenRestaurante(id: string): Promise<Restaurante> {
        const restaurantes = await this.restauranteModel.aggregate([
            {
                $unwind: '$Opiniones'
            }, {
                $match: { _id: new mongoose.Types.ObjectId(id) }
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

}
