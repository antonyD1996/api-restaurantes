import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse, ApiTags, ApiResponse } from '@nestjs/swagger';
import { OpinionClass } from './opinion.class';
import { Opinion } from './opinion.interface';
import { OpinionService } from './opinion.service';

@ApiTags('opiniones')
@Controller('opiniones')
export class OpinionController {

    constructor(private readonly servicio: OpinionService) {

    }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las opiniones' })
    @ApiResponse({ status: 201, description: 'Los datos han sido obtenidos exitosamente', type: [OpinionClass] })
    obtenerOpiniones(): Promise<Opinion[]> {
        return this.servicio.obtenerOpiniones();
    }

    @Get('resumen')
    @ApiOperation({ summary: 'Obtiene un resumen de cada restaurante' })
    @ApiResponse({ status: 201, description: 'Los datos han sido obtenidos exitosamente' })
    obtenerResumenPorRestaurantes(): Promise<Opinion[]> {
        return this.servicio.obtenerResumenPorRestaurantes();
    }

    @Get('resumen/:id')
    @ApiOperation({ summary: 'Obtiene el resumen de un restaurante mediante su id' })
    @ApiResponse({ status: 201, description: 'Los datos han sido obtenidos exitosamente' })
    obtenerResumenPorRestaurante(@Param('id') id): Promise<Opinion[]> {
        return this.servicio.obtenerResumenPorRestaurante(id);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener opiniones de un restaurante' })
    @ApiResponse({ status: 201, description: 'Los datos han sido obtenidos exitosamente', type: OpinionClass })
    obtenerOpinionesPorRestaurante(@Param('id') id): Promise<Opinion[]> {
        return this.servicio.obtenerOpinionesPorRestaurante(id);
    }

    @Post()
    @ApiOperation({ summary: 'Agregar una opinion' })
    @ApiCreatedResponse({
        description: 'La opinion ha sido agregada exitosamente', type: OpinionClass
    })
    agregarOpinion(@Body() body: Opinion): Promise<Opinion> {
        return this.servicio.agregarOpinion(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar una opinion usando su id' })
    @ApiResponse({
        status: 201,
        description: 'El Registro ha sido actualizado exitosamente.', type: OpinionClass
    })
    actualizarRestaurante(@Param('id') id, @Body() body: Opinion): Promise<Opinion> {
        return this.servicio.actualizarOpinion(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una opinion usando su id' })
    @ApiResponse({
        status: 201,
        description: 'El Registro ha sido eliminado exitosamente.'
    })
    eliminarRestaurante(@Param('id') id): Promise<Opinion> {
        return this.servicio.eliminarOpinion(id)
    }

}
