import { Opinion } from "src/opinion/opinion.interface";

export interface Restaurante {
    Id?: string,
    Nombre: string,
    Direccion: string,
    Telefono: number,
    Opiniones: Opinion[]
}
