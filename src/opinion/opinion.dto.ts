import { RestauranteDTO } from "src/restaurante/restaurante.dto";

export class OpinionDTO {
    readonly Nombre: String;
    readonly Comentario: String;
    readonly Puntuacion: Number;
    readonly Restaurante: RestauranteDTO;
}