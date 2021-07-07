import * as mongoose from 'mongoose'

export const OpinionSchema = new mongoose.Schema({
    Nombre: String,
    Comentario: String,
    Puntuacion: Number
})