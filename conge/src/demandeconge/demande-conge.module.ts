import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemandeConge, DemandeCongeSchema } from './demande-conge.schema';
import { DemandeCongeService } from './demande-conge.service';
import { DemandeCongeController } from './demande-conge.controller';
import { Solde, SoldeSchema } from 'src/solde/solde.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: DemandeConge.name, schema: DemandeCongeSchema }]),
        MongooseModule.forFeature([{ name: Solde.name, schema: SoldeSchema }]),

    ],
    providers: [DemandeCongeService],
    controllers: [DemandeCongeController],
    exports: [DemandeCongeService],
})
export class DemandeCongeModule { }
