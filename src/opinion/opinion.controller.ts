import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { OpinionDTO } from './opinion.dto';
import { Opinion } from './opinion.interface';
import { OpinionService } from './opinion.service';

@ApiTags('opiniones')
@Controller('opiniones')
export class OpinionController {

    constructor(private readonly servicio: OpinionService) {

    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las opiniones' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente', type: [OpinionDTO] })
    obtenerOpiniones(): Promise<Opinion[]> {
        return this.servicio.obtenerOpiniones();
    }

    @Get('resumen')
    @ApiOperation({ summary: 'Obtiene un resumen de cada restaurante' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente' })
    obtenerResumenPorRestaurantes(): Promise<Opinion[]> {
        return this.servicio.obtenerResumenPorRestaurantes();
    }

    @Get('resumen/:id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del restaurante para obtener resumen',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiOperation({ summary: 'Obtiene el resumen de un restaurante mediante su id' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente' })
    obtenerResumenPorRestaurante(@Param('id') id): Promise<Opinion[]> {
        return this.servicio.obtenerResumenPorRestaurante(id);
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del restaurante para obtener sus opiniones',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiOperation({ summary: 'Obtener opiniones de un restaurante usando su id' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente', type: [OpinionDTO] })
    obtenerOpinionesPorRestaurante(@Param('id') id): Promise<Opinion[]> {
        return this.servicio.obtenerOpinionesPorRestaurante(id);
    }

    @Post()
    @ApiBody({
        description: 'contiene la informacion de la opinion a guardar',
        schema: {
            type: 'object',
            properties: {
                Nombre: { type: 'string' },
                Comentario: { type: 'string' },
                Puntuacion: { type: 'number' },
                Restaurante: { type: 'string' }

            },
            example: {
                Nombre: "Carlos Duarte",
                Comentario: "Comentario random",
                Puntuacion: 2,
                Restaurante: "60e7c031c735a83170b894fd"
            }
        }
    })
    @ApiOperation({
        summary: 'Agregar una opinion'
    })
    @ApiCreatedResponse({
        description: 'La opinion ha sido agregada exitosamente', type: OpinionDTO
    })
    agregarOpinion(@Body() body: Opinion): Promise<Opinion> {
        return this.servicio.agregarOpinion(body);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id de la opinion a actualizar',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiBody({
        description: 'contiene la informacion de la opinion a actualizar',
        schema: {
            type: 'object',
            properties: {
                Comentario: { type: 'string' },
                Puntuacion: { type: 'number' }

            },
            example: {
                Comentario: "Comentario random",
                Puntuacion: 2
            }
        }
    })
    @ApiOperation({ summary: 'Actualizar una opinion usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido actualizado exitosamente.', type: OpinionDTO
    })
    actualizarOpinion(@Param('id') id, @Body() body: Opinion): Promise<Opinion> {
        return this.servicio.actualizarOpinion(id, body);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id de la opinion a eliminar',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiOperation({ summary: 'Eliminar una opinion usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido eliminado exitosamente.',
        type: OpinionDTO
    })
    eliminarOpinion(@Param('id') id): Promise<Opinion> {
        return this.servicio.eliminarOpinion(id)
    }

}
