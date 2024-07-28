import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SoldeService } from 'src/solde/solde.service';

export type UserDocument = User & Document;

@Schema()
export class User {
    //l'id est genere automatiquement 
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, enum: ['rh', 'employe'], default: 'employe' })
    role: string;

    @Prop()
    picture: string;

    @Prop({ type: Date })
    birthdate: Date;
    
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.set('collection', 'user'); // Specify the custom collection

// Post-save hook to create solde for a new user
UserSchema.post('save', async function (user: UserDocument) {
    const soldeService = new SoldeService(user.model('Solde')); // Create an instance of SoldeService

    try {
        await soldeService.create({
            user: user.id,
            totalVacationDays: 30,
            totalSickDays: 7,
            totalPersonalDays: 14,
            totalOtherDays: 10,
        });
        console.log(`Solde created for user: ${user._id}`);
    } catch (error) {
        console.error(`Error creating solde for user: ${user._id}`, error);
    }
});