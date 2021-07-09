import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Opinion } from 'src/opinion/opinion.interface';
import { RestauranteClass } from './restaurante.class';
import { Restaurante } from './restaurante.interface';
import { RestauranteService } from './restaurante.service';


@ApiTags('restaurantes')
@Controller('restaurantes')
export class RestauranteController {
    constructor(private readonly servicio: RestauranteService) {

    }
    @Get()
    @ApiOperation({ summary: 'Obtener todos los restaurantes' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente', type: [RestauranteClass] })
    obtenerRestaurantes(): Promise<Restaurante[]> {
        return this.servicio.obtenerRestaurantes();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un restaurante usando su id' })
    @ApiResponse({ status: 200, description: 'El restaurante ha sido obtenido con exito', type: [RestauranteClass] })
    obtenerRestaurante(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerRestaurante(id);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar un restaurante' })
    @ApiCreatedResponse({
        description: 'El Registro ha sido creado exitosamente.',
        type: RestauranteClass,
    })
    crearRestaurante(@Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.crearRestaurante(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un restaurante usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido actualizado exitosamente.',
        type: RestauranteClass,
    })
    actualizarRestaurante(@Param('id') id, @Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.actualizarRestaurante(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un restaurante usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido eliminado exitosamente.'
    })
    eliminarRestaurante(@Param('id') id): Promise<Restaurante> {
        return this.servicio.eliminarRestaurante(id)
    }



}
