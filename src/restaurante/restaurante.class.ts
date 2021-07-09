import { ApiProperty } from "@nestjs/swagger";

export class RestauranteClass {
    @ApiProperty()
    _id?: number;
    @ApiProperty()
    Nombre: string;
    @ApiProperty()
    Direccion: string;
    @ApiProperty()
    Telefono: number;
}