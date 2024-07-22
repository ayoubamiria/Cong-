import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
UserSchema.set('collection', 'user'); // Spécifiez la collection personnalisée
