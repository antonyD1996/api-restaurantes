import { ApiProperty } from "@nestjs/swagger";
import * as mongoose from 'mongoose'

export class RestauranteDTO {
    @ApiProperty({ description: 'Id del restaurante', example: "60e7c031c735a83170b894fd" })
    readonly _id?: mongoose.Types.ObjectId;
    @ApiProperty({ description: 'Nombre del restaurante', example: "Pollo Campero" })
    readonly Nombre: String;
    @ApiProperty({ description: 'Direccion del restaurante', example: "Nueva Concepion, Chalatenango " })
    readonly Direccion: String;
    @ApiProperty({ description: 'Telefono del restaurante', example: 70079032 })
    readonly Telefono: Number;
}