import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Solde, SoldeSchema } from './solde.schema';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Solde.name, schema: SoldeSchema }])
    ],
    providers: [SoldeService],
    controllers: [SoldeController],
    exports: [SoldeService],
})
export class SoldeModule { }
