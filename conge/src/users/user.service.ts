import { Injectable, HttpException, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UpdatePasswordDto, UpdateUserDto } from './dto/update-user.dto';

 

@Injectable()

export class UserService {
    hashService: any;
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    //signup
    async create(createUserDto: CreateUserDto): Promise<{ message: string; user?: User }> {
        console.log('Creating user:', createUserDto); // Log de vérification

        const { firstName, lastName, email, password, role, picture, birthdate } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            picture,
            birthdate,
        });

        try {
            const savedUser = await newUser.save();
            console.log('User saved successfully:', savedUser); // Log du succès
            return { message: 'User added successfully', user: savedUser };
        } catch (error) {
            console.error('Error while saving user:', error); // Log de l'erreur
            if (error.code === 11000) {
                // Code for duplicate key error
                throw new HttpException('Email already exists', HttpStatus.CONFLICT);
            }
            throw new HttpException('Error adding user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async remove(id: string): Promise<void> {
        await this.userModel.findByIdAndDelete(id).exec();
    }
  
    // login
    async signin(email: string, password: string): Promise<{ message: string; token: string; user: User }> {
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new HttpException('Verifiez votre  Email', HttpStatus.UNAUTHORIZED);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new HttpException('Password Invalide', HttpStatus.UNAUTHORIZED);
        } else {
            const token = jwt.sign(
                { data: { id: user.id, role: user.role } },
                'ayoub', // cle de sécurité
                { expiresIn: '1h' }
            );// genrer un token a partir d'une data specifique

            return { message: 'User logged in successfully........', token, user };
        }
    }
    //maj profile
    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
        const existingUser = await this.userModel.findById(userId).exec();//verifier si l'user existe 

        if (!existingUser) {
            throw new NotFoundException(`User #${userId} not found`);
        }

        // Exclude password field explicitly if present in updateUserDto
        const updatedFields = updateUserDto;
        existingUser.password = existingUser.password;//?????
        Object.assign(existingUser, updatedFields);//assigner les n donnees a l'objet 
        return existingUser.save();
    }
    async updatePassword(userId: string, updatePasswordDto: UpdatePasswordDto, hashedPassword: string): Promise<User> {
        try {
            const existingUser = await this.userModel.findById(userId).exec();

            if (!existingUser) {
                throw new NotFoundException(`User #${userId} not found`);
            }

            // Log the existing user
            console.log('Existing User:', existingUser);

            // Update user password with hashed password
            existingUser.password = hashedPassword;
            return existingUser.save();
        } catch (error) {
            console.error('Error updating user password:', error);
            throw new InternalServerErrorException('Failed to update user password');
        }
    }

    
    


    // Ajoutez plus de méthodes CRUD si nécessaire
}
