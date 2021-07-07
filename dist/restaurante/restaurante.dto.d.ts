import { OpinionDTO } from "src/opinion/opinion.dto";
export declare class RestauranteDTO {
    readonly Nombre: String;
    readonly Direccion: String;
    readonly Telefono: Number;
    readonly Opiniones: [OpinionDTO];
}
