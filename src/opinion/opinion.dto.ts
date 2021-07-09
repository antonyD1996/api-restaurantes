import { ApiProperty } from "@nestjs/swagger";
import { RestauranteDTO } from "src/restaurante/restaurante.dto";
import * as mongoose from 'mongoose'

export class OpinionDTO {
    @ApiProperty({ description: 'Id de la opinion', example: "60e7c031c735a83170b894fd" })
    readonly _id?: mongoose.Types.ObjectId;
    @ApiProperty({ description: 'Nombre y Apellido de la persona que da la opinion', example: "Antony Duarte " })
    readonly Nombre: String;
    @ApiProperty({ description: 'Un comentario sobre la opinion', example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." })
    readonly Comentario: String;
    @ApiProperty({ description: 'Un numero entero entre 1 y 5', example: 4 })
    readonly Puntuacion: Number;
    @ApiProperty({ description: 'Id del restaurante al que se le dara opinion', example: "60e7c031c735a83170b894fd" })
    readonly Restaurante: mongoose.Types.ObjectId;
}