import { Restaurante } from "src/restaurante/restaurante.interface";

export interface Opinion {
    Id?: String,
    Nombre: String,
    Comentario: String,
    Puntuacion: Number,
    Restaurante: Restaurante
}
