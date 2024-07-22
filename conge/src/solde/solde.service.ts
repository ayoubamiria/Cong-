import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Solde, SoldeDocument } from './solde.schema';

@Injectable()
export class SoldeService {
    constructor(
        @InjectModel(Solde.name) private soldeModel: Model<SoldeDocument>,
    ) { }

    async create(createSoldeDto: any): Promise<Solde> {
        const createdSolde = new this.soldeModel(createSoldeDto);
        return createdSolde.save();
    }

    async findAll(): Promise<Solde[]> {
        return this.soldeModel.find().exec();
    }

    async findOne(id: string): Promise<Solde> {
        return this.soldeModel.findById(id).exec();
    }

    async update(id: string, updateSoldeDto: any): Promise<Solde> {
        return this.soldeModel.findByIdAndUpdate(id, updateSoldeDto, { new: true }).exec();
    }

    async remove(id: string): Promise<any> {
        return this.soldeModel.findByIdAndDelete(id).exec();
    }
}
