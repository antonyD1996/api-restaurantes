import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Opinion } from './opinion.interface';
import * as mongoose from 'mongoose'

@Injectable()
export class OpinionService {

    constructor(@InjectModel('opiniones') private readonly opinionModel: Model<Opinion>) { }

    async obtenerOpiniones(): Promise<Opinion[]> {

        return await this.opinionModel.find();
    }

    async obtenerOpinionesPorRestaurante(id: string): Promise<Opinion[]> {
        return await this.opinionModel.aggregate([{ $match: { Restaurante: new mongoose.Types.ObjectId(id) } }])
    }

    async obtenerResumenPorRestaurantes(): Promise<Opinion[]> {
        return await this.opinionModel.aggregate([
            {
                $lookup: {
                    from: "restaurantes",
                    localField: "Restaurante",
                    foreignField: "_id",
                    as: "res"
                }
            },
            {
                $unwind: "$res"
            },
            {
                $group: {
                    _id: {
                        restaurante: "$res.Nombre"
                    },
                    promedio: { $avg: '$Puntuacion' },
                    mayor: { $max: '$Puntuacion' },
                    menor: { $min: '$Puntuacion' }
                }
            }, {
                $project: {
                    _id: '$_id',
                    Calificacion: { $round: ['$promedio', 2] },
                    'Mayor Puntuacion': '$mayor',
                    'Menor Puntuacion': '$menor'

                }
            }])
    }
    async obtenerResumenPorRestaurante(id: string): Promise<Opinion[]> {
        return await this.opinionModel.aggregate([
            {
                $match: { Restaurante: new mongoose.Types.ObjectId(id) }
            },
            {
                $lookup: {
                    from: "restaurantes",
                    localField: "Restaurante",
                    foreignField: "_id",
                    as: "res"
                }
            },
            {
                $unwind: "$res"
            },
            {
                $group: {
                    _id: {
                        restaurante: "$res.Nombre"
                    },
                    promedio: { $avg: '$Puntuacion' },
                    mayor: { $max: '$Puntuacion' },
                    menor: { $min: '$Puntuacion' }
                }
            }, {
                $project: {
                    _id: '$_id',
                    Calificacion: { $round: ['$promedio', 2] },
                    'Mayor Puntuacion': '$mayor',
                    'Menor Puntuacion': '$menor'

                }
            }])
    }

    async agregarOpinion(opinion: Opinion): Promise<Opinion> {
        const nuevo = new this.opinionModel(opinion)
        return await nuevo.save();
    }

    async actualizarOpinion(id: string, opinion: Opinion): Promise<Opinion> {
        return await this.opinionModel.findByIdAndUpdate(id, opinion, { new: true, useFindAndModify: false });
    }

    async eliminarOpinion(id: string): Promise<Opinion> {
        return await this.opinionModel.findByIdAndRemove(id);
    }
}
