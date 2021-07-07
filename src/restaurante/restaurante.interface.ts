import { Opinion } from "src/opinion/opinion.interface";

export interface Restaurante {
    Id?: Number,
    Nombre: String,
    Direccion: String,
    Telefono: Number,
    Opiniones: Opinion[]
}
