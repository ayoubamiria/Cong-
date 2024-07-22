import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DemandeConge, DemandeCongeDocument } from './demande-conge.schema';

@Injectable()
export class DemandeCongeService {
    constructor(
        @InjectModel(DemandeConge.name) private demandeCongeModel: Model<DemandeCongeDocument>,
    ) { }

    async create(createDemandeCongeDto: any): Promise<DemandeConge> {
        const createdDemandeConge = new this.demandeCongeModel(createDemandeCongeDto);
        return createdDemandeConge.save();
    }

    async findAll(): Promise<DemandeConge[]> {
        return this.demandeCongeModel.find().exec();
    }

    async findOne(id: string): Promise<DemandeConge> {
        return this.demandeCongeModel.findById(id).exec();
    }

    async update(id: string, updateDemandeCongeDto: any): Promise<DemandeConge> {
        return this.demandeCongeModel.findByIdAndUpdate(id, updateDemandeCongeDto, { new: true }).exec();
    }

    async remove(id: string): Promise<any> {
        return this.demandeCongeModel.findByIdAndDelete(id).exec();
    }
}
