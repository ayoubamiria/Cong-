import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Solde, SoldeDocument } from './solde.schema';

@Injectable()
export class SoldeService {
    constructor(
        @InjectModel(Solde.name) private soldeModel: Model<SoldeDocument>,
    ) { }
/* async create(createSoldeDto: any): Promise<Solde> {
    const createdSolde = new this.soldeModel(createSoldeDto);
    return createdSolde.save();
  }*/ 
    async create(createSoldeDto: any): Promise<Solde> {
        const createdSolde = new this.soldeModel(createSoldeDto);
        return createdSolde.save();
    }

    async findAll(): Promise<Solde[]> {
        return this.soldeModel.find().exec();
    }
    async findOne(id: string): Promise<Solde> {
        const solde = await this.soldeModel.findById(id).exec();
        if (!solde) throw new NotFoundException('Solde not found');
        return solde;
    }
    async findOneByUser(userId: string): Promise<Solde> {
        const solde = await this.soldeModel.findOne({ user: userId }).exec();

        if (!solde) throw new NotFoundException('Solde not found for the given user');
        return solde;
    }

    ///////////
    async getDaysByType(userId: string, leaveType: string): Promise<number> {
        console.log(`Fetching solde for user: ${userId} with leave type: ${leaveType}`);

        const solde = await this.soldeModel.findOne({ user: userId }).exec();

        if (!solde) {
            console.error(`User with ID ${userId} not found`);
            throw new NotFoundException('User not found');
           
        }
      
        
        const normalizedLeaveType = leaveType.toLowerCase(); // Normalize the leave type to avoid case sensitivity issues

        switch (normalizedLeaveType) {
            case 'vacance':
                return solde.totalVacationDays;
            case 'maladie':
                return solde.totalSickDays;
            case 'personnel':
                return solde.totalPersonalDays;
            case 'other':
                return solde.totalOtherDays;
            default:
                console.error(`Invalid leave type: ${leaveType}`);
                throw new NotFoundException(`Invalid leave type: ${leaveType}`);
        }
    }
    async update(id: string, updateSoldeDto: any): Promise<Solde> {
        return this.soldeModel.findByIdAndUpdate(id, updateSoldeDto, { new: true }).exec();
    }

    async remove(id: string): Promise<any> {
        return this.soldeModel.findByIdAndDelete(id).exec();
    }
    // Méthode pour obtenir le nombre de jours de congé par type pour un utilisateur
    /*async getDaysByType(userId: string): Promise<any> {
        // Recherche du solde de l'utilisateur par ID
        const solde = await this.soldeModel.findOne({ user: userId }).exec();

        // Si le solde n'est pas trouvé, lever une exception NotFound
        if (!solde) {
            throw new NotFoundException(`Solde for user #${userId} not found`);
        }

        // Retourner un objet contenant les jours de congé par type
        return {
            vacance: solde.totalVacationDays,
            maladie: solde.totalSickDays,
            personnel: solde.totalPersonalDays,
            other: solde.totalOtherDays,
        };
    }
  */
}
