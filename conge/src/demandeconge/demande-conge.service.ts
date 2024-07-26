import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DemandeConge, DemandeCongeDocument } from './demande-conge.schema';
import CreateCongeDto from './dto/demande-dto';
import { Solde, SoldeDocument } from 'src/solde/solde.schema';


@Injectable()
export class DemandeCongeService {
    
    constructor(
      
        @InjectModel(DemandeConge.name) private demandeCongeModel: Model<DemandeCongeDocument>,
        @InjectModel(Solde.name) private soldeModel: Model<Solde>,
    ) { }

    async creeConge(createCongeDto: CreateCongeDto): Promise<DemandeConge> {
        const createdConge = new this.demandeCongeModel(createCongeDto);
        console.log("conge cree :", createdConge)
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
    //en attente 
    async findOneAppEnAttente(): Promise<DemandeConge[]> {
        // Assuming 'demandeCongeModel' is a Mongoose model
        const demandesCongeApp = await this.demandeCongeModel.find({
            status: "en attente"
        }); // Find all requests with user ID(user cle ertangere de la collection demandeconge)
        return demandesCongeApp; // Return the array of requests
    }
    //modifier status en attente-> approuvé + decrimenter le solde selon le type
    
  
   

    // Method to find user's leave balance
    async findOneByUser(userId: string): Promise<SoldeDocument> {
        const solde = await this.soldeModel.findOne({ user: userId });
        if (!solde) {
            throw new NotFoundException('User leave balance not found');
        }
        return solde;
    }

    // Method to approve leave request and decrement balance
    async approveLeaveRequest(id: string): Promise<DemandeCongeDocument> {
        // Find the leave request
        const leaveRequest = await this.demandeCongeModel.findById(id);
        if (!leaveRequest) {
            throw new NotFoundException('Leave request not found');
        }

        // Log the found leave request
        console.log('Found leave request:', leaveRequest);

        // Check if the status is "en attente"
        if (leaveRequest.status !== 'en attente') {
            throw new Error('Only pending leave requests can be approved');
        }

        // Find the user's leave balance
        const solde = await this.findOneByUser(leaveRequest.user.toString());
        if (!solde) {
            // Log the absence of user leave balance
            console.log('User leave balance not found for user ID:', leaveRequest.user);
            throw new NotFoundException('User leave balance not found');
        }

        // Log the found leave balance
        console.log('Found leave balance:', solde);

        // Calculate the number of leave days
        const startDate = new Date(leaveRequest.startDate);
        const endDate = new Date(leaveRequest.endDate);
        const leaveDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

        // Update the leave balance based on the leave type
        switch (leaveRequest.type) {
            case 'vacance':
                if (solde.totalVacationDays < leaveDays) {
                    throw new Error('Insufficient vacation days');
                }
                solde.totalVacationDays -= leaveDays;
                break;
            case 'maladie':
                if (solde.totalSickDays < leaveDays) {
                    throw new Error('Insufficient sick days');
                }
                solde.totalSickDays -= leaveDays;
                break;
            case 'personnel':
                if (solde.totalPersonalDays < leaveDays) {
                    throw new Error('Insufficient personal days');
                }
                solde.totalPersonalDays -= leaveDays;
                break;
            case 'other':
                if (solde.totalOtherDays < leaveDays) {
                    throw new Error('Insufficient other days');
                }
                solde.totalOtherDays -= leaveDays;
                break;
            default:
                throw new NotFoundException(`Invalid leave type: ${leaveRequest.type}`);
        }

        // Save the updated leave balance
        await solde.save();

        // Update the leave request status to "approuvé"
        leaveRequest.status = 'approuvé';
        await leaveRequest.save();

        return leaveRequest;
    }
    //
    async declineLeaveRequest(id: string): Promise<DemandeCongeDocument> {
        // Find the leave request
        const leaveRequest = await this.demandeCongeModel.findById(id);
        if (!leaveRequest) {
            throw new NotFoundException('Leave request not found');
        }

        // Log the found leave request
        console.log('Found leave request:', leaveRequest);

        // Check if the status is "en attente"
        if (leaveRequest.status !== 'en attente') {
            throw new Error('Only pending leave requests can be approved');
        }
        leaveRequest.status = 'rejeté';
        await leaveRequest.save();

        return leaveRequest;
    }




}

