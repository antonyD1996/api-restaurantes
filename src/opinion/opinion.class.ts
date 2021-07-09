import { ApiProperty } from "@nestjs/swagger";
import { RestauranteClass } from './../restaurante/restaurante.class';

export class OpinionClass {
    @ApiProperty()
    _id?: number;
    @ApiProperty()
    Nombre: string;
    @ApiProperty()
    Comentario: string;
    @ApiProperty()
    Puntuacion: number;
    @ApiProperty()
    Restaurante: RestauranteClass;
}