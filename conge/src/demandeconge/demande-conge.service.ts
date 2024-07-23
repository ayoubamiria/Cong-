import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DemandeConge, DemandeCongeDocument } from './demande-conge.schema';
import CreateCongeDto from './dto/demande-dto';

@Injectable()
export class DemandeCongeService {
    constructor(
        @InjectModel(DemandeConge.name) private demandeCongeModel: Model<DemandeCongeDocument>,
    ) { }

    async creeConge(createCongeDto: CreateCongeDto): Promise<DemandeConge> {
        const createdConge = new this.demandeCongeModel(createCongeDto);
        console.log("conge cree :",createdConge)
        return createdConge.save();
    }

    async findAll(): Promise<DemandeConge[]> {
        return this.demandeCongeModel.find().exec();
    }
///////////////historique des conges ////////////////////////////////////
    async findOne(id: string): Promise<DemandeConge[]> {
        // Assuming 'demandeCongeModel' is a Mongoose model
        const demandesConge = await this.demandeCongeModel.find({ user: id }); // Find all requests with user ID(user cle ertangere de la collection demandeconge)
        return demandesConge; // Return the array of requests
    }
    ///////////////tout les conges valides ///////////////////////////////
    async findOneApp(id: string): Promise<DemandeConge[]> {
        // Assuming 'demandeCongeModel' is a Mongoose model
        const demandesCongeApp = await this.demandeCongeModel.find({
            user: id,
            status: "approuvé"
        }); // Find all requests with user ID(user cle ertangere de la collection demandeconge)
        return demandesCongeApp; // Return the array of requests
    }
    /*async function getApprovedLeaveRequests(userId: string): Promise<DemandeConge[]> {
  // Assuming 'demandeCongeModel' is a Mongoose model
  const approvedRequests = await demandeCongeModel.find({
    user: userId,
    status: "approuvé" // Replace with the actual status value for approved requests
  });
  return approvedRequests;
}
*/

    async update(id: string, updateDemandeCongeDto: any): Promise<DemandeConge> {
        return this.demandeCongeModel.findByIdAndUpdate(id, updateDemandeCongeDto, { new: true }).exec();
    }

    async remove(id: string): Promise<any> {
        return this.demandeCongeModel.findByIdAndDelete(id).exec();
    }
}
