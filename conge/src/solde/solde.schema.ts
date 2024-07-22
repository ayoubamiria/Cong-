import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type SoldeDocument = Solde & Document;

@Schema({ timestamps: true })
export class Solde {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    user: Types.ObjectId;

    @Prop({ type: Number, required: true })
    totalVacationDays: number;

    @Prop({ type: Number, required: true })
    usedVacationDays: number;

    @Prop({ type: Number, required: true })
    totalSickDays: number;

    @Prop({ type: Number, required: true })
    usedSickDays: number;

    @Prop({ type: Number, required: true })
    totalPersonalDays: number;

    @Prop({ type: Number, required: true })
    usedPersonalDays: number;

    @Prop({ type: Number, required: true })
    totalOtherDays: number;

    @Prop({ type: Number, required: true })
    usedOtherDays: number;
}

export const SoldeSchema = SchemaFactory.createForClass(Solde);
SoldeSchema.set('collection', 'solde');