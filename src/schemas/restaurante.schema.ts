import * as mongoose from 'mongoose'
import { OpinionSchema } from './opinion.schema';

export const RestauranteSchema = new mongoose.Schema({
    Nombre: String,
    Direccion: String,
    Telefono: Number,
    Opiniones: [OpinionSchema]
})