import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Restaurante } from './restaurante.interface';
import { RestauranteService } from './restaurante.service';
import { RestauranteDTO } from 'src/restaurante/restaurante.dto';


@ApiTags('restaurantes')
@Controller('restaurantes')
export class RestauranteController {
    constructor(private readonly servicio: RestauranteService) {

    }
    @Get()
    @ApiOperation({ summary: 'Obtener todos los restaurantes' })
    @ApiResponse({ status: 200, description: 'Los datos han sido obtenidos exitosamente', type: [RestauranteDTO] })
    obtenerRestaurantes(): Promise<Restaurante[]> {
        return this.servicio.obtenerRestaurantes();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del restaurante a obtener',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiOperation({ summary: 'Obtener un restaurante usando su id' })
    @ApiResponse({ status: 200, description: 'El restaurante ha sido obtenido con exito', type: [RestauranteDTO] })
    obtenerRestaurante(@Param('id') id): Promise<Restaurante> {
        return this.servicio.obtenerRestaurante(id);
    }

    @Post()
    @ApiBody({
        description: 'contiene la informacion del restaurante a guardar',
        schema: {
            type: 'object',
            properties: {
                Nombre: { type: 'string' },
                Direccion: { type: 'string' },
                Telefono: { type: 'number' }

            },
            example: {
                Nombre: "Restaurante x",
                Direccion: "Direccion de prueba",
                Telefono: 22736000
            }
        }
    })
    @ApiOperation({ summary: 'Guardar un restaurante' })
    @ApiCreatedResponse({
        description: 'El Registro ha sido creado exitosamente.',
        type: RestauranteDTO,
    })
    crearRestaurante(@Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.crearRestaurante(body);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del restaurante a actualizar',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiBody({
        description: 'contiene la informacion del restaurante a actualizar',
        schema: {
            type: 'object',
            properties: {
                Nombre: { type: 'string' },
                Direccion: { type: 'string' },
                Telefono: { type: 'number' }

            },
            example: {
                Nombre: "Restaurante x",
                Direccion: "Direccion de prueba",
                Telefono: 22736000
            }
        }
    })
    @ApiOperation({ summary: 'Actualizar un restaurante usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido actualizado exitosamente.',
        type: RestauranteDTO,
    })
    actualizarRestaurante(@Param('id') id, @Body() body: Restaurante): Promise<Restaurante> {
        return this.servicio.actualizarRestaurante(id, body);
    }

    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Id del restaurante a eliminar',
        example: '60e7c031c735a83170b894fd'
    })
    @ApiOperation({ summary: 'Eliminar un restaurante usando su id' })
    @ApiResponse({
        status: 200,
        description: 'El Registro ha sido eliminado exitosamente.', type: RestauranteDTO
    })
    eliminarRestaurante(@Param('id') id): Promise<Restaurante> {
        return this.servicio.eliminarRestaurante(id)
    }



}
