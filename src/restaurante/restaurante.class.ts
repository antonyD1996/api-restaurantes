import { ApiProperty } from "@nestjs/swagger";
import { OpinionClass } from "src/opinion/opinion.class";

export class RestauranteClass {
    @ApiProperty()
    _id?: number;
    @ApiProperty()
    Nombre: string;
    @ApiProperty()
    Direccion: string;
    @ApiProperty()
    Telefono: number;
    @ApiProperty()
    Opiniones: OpinionClass[];
}