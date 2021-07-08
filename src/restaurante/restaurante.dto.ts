import { OpinionDTO } from "src/opinion/opinion.dto";

export class RestauranteDTO {
    readonly Nombre: String;
    readonly Direccion: String;
    readonly Telefono: Number;
    readonly Opiniones: [OpinionDTO];
}