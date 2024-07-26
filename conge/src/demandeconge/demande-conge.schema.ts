import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DemandeCongeDocument = DemandeConge & Document;

@Schema({ timestamps: true })
export class DemandeConge {
    @Prop({
        type: Types.ObjectId,//cle etranger
        ref: 'User',//reference sur la table mais on prend le nom declare dans export 
        required: true //obligatoire*
    })
    user: Types.ObjectId;

    @Prop({ type: Date, required: true })
    startDate: Date;

    @Prop({ type: Date, required: true })
    endDate: Date;

    @Prop({
        type: String, required: true, enum: ['vacance', 'maladie', 'personnel', 'other'], default: 'maladie'
    })
    type: string;

    @Prop({ type: String, required: true, enum: ['en attente', 'approuvé', 'rejeté'], default: 'en attente' })
    status: string;

    @Prop({ type: String })
    reason: string;

    
}

export const DemandeCongeSchema = SchemaFactory.createForClass(DemandeConge);
DemandeCongeSchema.set('collection', 'demandecongé');