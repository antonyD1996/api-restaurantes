import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OpinionSchema } from 'src/schemas/opinion.schema';
import { OpinionController } from './opinion.controller';
import { OpinionService } from './opinion.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'opiniones', schema: OpinionSchema }])],
    providers: [OpinionService],
    controllers: [OpinionController]
})
export class OpinionModule { }
