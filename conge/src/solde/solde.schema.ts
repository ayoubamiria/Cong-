import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SoldeDocument = Solde & Document;

@Schema({ timestamps: true })
export class Solde {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: Types.ObjectId;

    @Prop({ type: Number, required: true, default: 30 })
    totalVacationDays: number;

    @Prop({ type: Number, required: true, default: 7 })
    totalSickDays: number;

    @Prop({ type: Number, required: true, default: 14 })
    totalPersonalDays: number;

    @Prop({ type: Number, required: true, default: 10 })
    totalOtherDays: number;
}



export const SoldeSchema = SchemaFactory.createForClass(Solde);
SoldeSchema.set('collection', 'solde');