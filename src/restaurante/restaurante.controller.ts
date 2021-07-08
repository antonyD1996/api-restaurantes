import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OpinionClass } from 'src/opinion/opinion.class';
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
    @ApiOperation({ summary: 'Obtener Todos los registros' })
    @ApiResponse({ status: 201, description: 'Los datos han sido obtenidos exitosamente', type: [RestauranteClass] })
    obtenerTodos(): Promise<Restaurante[]> {
        return this.servicio.obtenerTodos();
    }

    @Get('/resumen')
    obtenerTodosResumen(): Promise<Restaurante[]> {
        return this.servicio.obtenerTodosResumen();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener Un Registro usando su id' })
    @ApiResponse({ status: 201, description: 'El Registro ha sido obtenido con exito', type: [RestauranteClass] })
    obtenerUno(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerUno(id);
    }

    @Get('/resumen/:id')
    obtenerUnoResumen(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerUnoResumen(id);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar un restaurante' })
    @ApiCreatedResponse({
        description: 'El Registro ha sido creado exitosamente.',
        type: RestauranteClass,
    })
    crear(@Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.crear(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un restaurante usando su id' })
    @ApiResponse({
        status: 201,
        description: 'El Registro ha sido actualizado exitosamente.',
        type: RestauranteClass,
    })
    actualizar(@Param('id') id, @Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.update(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un restaurante usando su id' })
    @ApiResponse({
        status: 201,
        description: 'El Registro ha sido actualizado exitosamente.'
    })
    delete(@Param('id') id): Promise<Restaurante> {
        return this.servicio.delete(id)
    }

    @Post('/opinion/:id')
    @ApiOperation({ summary: 'Agregar una opinion usando el id del restaurante' })
    @ApiCreatedResponse({
        description: 'La opinion ha sido agregada exitosamente',
        type: OpinionClass,
    })
    agregarOpinion(@Param('id') id, @Body() body: Opinion): Promise<Restaurante> {
        return this.servicio.agregarOpinion(id, body);
    }

    @Put(':id/opinion/:idOpinion')
    @ApiOperation({ summary: 'Actualizar una opinion usando el id' })
    @ApiResponse({
        status: 201,
        description: 'La opinion ha sido agregada exitosamente',
        type: OpinionClass,
    })
    actualizarOpinion(@Param('id') id, @Param('idOpinion') idOpinion, @Body() body: Opinion): Promise<Restaurante> {
        return this.servicio.actualizarOpinion(id, idOpinion, body);
    }
}
