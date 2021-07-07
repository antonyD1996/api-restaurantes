import { Opinion } from 'src/opinion/opinion.interface';
import { Restaurante } from './restaurante.interface';
import { RestauranteService } from './restaurante.service';
export declare class RestauranteController {
    private readonly servicio;
    constructor(servicio: RestauranteService);
    obtenerTodos(): Promise<Restaurante[]>;
    obtenerUno(id: any): Promise<Restaurante>;
    crear(body: Restaurante): Promise<Restaurante>;
    agregarOpinion(id: any, body: Opinion): Promise<Restaurante>;
}
