import { Model } from 'mongoose';
import { Restaurante } from './restaurante.interface';
import { Opinion } from 'src/opinion/opinion.interface';
export declare class RestauranteService {
    private readonly restauranteModel;
    constructor(restauranteModel: Model<Restaurante>);
    obtenerTodos(): Promise<Restaurante[]>;
    obtenerUno(id: String): Promise<Restaurante>;
    crear(restaurante: Restaurante): Promise<Restaurante>;
    agregarOpinion(id: string, opinion: Opinion): Promise<Restaurante>;
}
