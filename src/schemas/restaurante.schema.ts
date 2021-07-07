import * as mongoose from 'mongoose'
import { OpinionSchema } from './opinion.schema';

export const RestauranteSchema = new mongoose.Schema(
    {
        Nombre: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: Number, required: true },
        Opiniones: { type: [OpinionSchema], required: false }
    },
    {
        versionKey: false,
        timestamps: true
    }
)