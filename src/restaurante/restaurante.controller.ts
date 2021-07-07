import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Opinion } from 'src/opinion/opinion.interface';
import { Restaurante } from './restaurante.interface';
import { RestauranteService } from './restaurante.service';

@Controller('restaurantes')
export class RestauranteController {
    constructor(private readonly servicio: RestauranteService) {

    }
    @Get()
    obtenerTodos(): Promise<Restaurante[]> {
        return this.servicio.obtenerTodos();
    }
    @Get('/resumen')
    obtenerTodosResumen(): Promise<Restaurante[]> {
        return this.servicio.obtenerTodosResumen();
    }

    @Get(':id')
    obtenerUno(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerUno(id);
    }

    @Get('/resumen/:id')
    obtenerUnoResumen(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerUnoResumen(id);
    }

    @Post()
    crear(@Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.crear(body);
    }

    @Post(':id')
    agregarOpinion(@Param('id') id, @Body() body: Opinion): Promise<Restaurante> {
        return this.servicio.agregarOpinion(id, body);
    }
}
