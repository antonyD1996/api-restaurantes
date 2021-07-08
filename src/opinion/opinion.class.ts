import { ApiProperty } from "@nestjs/swagger";

export class OpinionClass {
    @ApiProperty()
    _id?: string;
    @ApiProperty()
    Nombre: string;
    @ApiProperty()
    Comentario: string;
    @ApiProperty()
    Puntuacion: number;
}