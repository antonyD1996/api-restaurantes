import * as mongoose from 'mongoose'

export const OpinionSchema = new mongoose.Schema(
    {
        Nombre: { type: String, required: true },
        Comentario: { type: String, required: true },
        Puntuacion: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    }
)