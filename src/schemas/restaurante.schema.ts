import * as mongoose from 'mongoose'
import { OpinionSchema } from './opinion.schema';

export const RestauranteSchema = new mongoose.Schema(
    {
        Nombre: { type: String, required: true },
        Direccion: { type: String, required: true },
        Telefono: { type: Number, required: true },
        idCategoria: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
)