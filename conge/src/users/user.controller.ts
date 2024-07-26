import { Controller, Get, Post, Param, Body,Delete, HttpException, Patch, HttpStatus, Put, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';
import { UpdatePasswordDto, UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post('signup')
    async signup(@Body() createUserDto: CreateUserDto) {
        console.log('Received signup request:', createUserDto); // Log de vérification
        const result = await this.userService.create(createUserDto);
        console.log('Signup result:', result); // Log du résultat
        return result;
    }
    @Post('signin')
    async signin(@Body() signinDto: { email: string; password: string }) {
        try {
            console.log('signinDto:', signinDto); // Log the signinDto object
            const result = await this.userService.signin(signinDto.email, signinDto.password);
            console.log('result:', result); // Log the result object
            if (!result) {
                throw new Error('UserService.signin returned undefined');
            }
            const { message, token, user } = result;
            return {
                statusCode: 200,
                message,
                token,
                user,
            };
        } catch (error) {
            console.error('Error in signin:', error); // Log the error object
            throw new HttpException(error.message, error.status);
        }
    }


    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.userService.remove(id);
    }

    // Ajoutez plus de routes si nécessaire
    //modifier profile 
    @Put(':id/profil/information')
    async updateUser(
        @Param('id') id: string,
        @Body() UpdateuserDto: UpdateUserDto,
    ): Promise<User> {
        try {
            const updatedUser = await this.userService.updateUser(id, UpdateuserDto);
            return updatedUser;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST); // Handle potential errors
        }
    }
    // modification mot de passe 
    @Put(':id/profil/password')
    async updatePassword(
        @Param('id') userId: string,
        @Body() updatePasswordDto: UpdatePasswordDto
    ) {
        try {
            const { newPassword } = updatePasswordDto;

            // Log the received newPassword
            console.log('New Password:', newPassword);

            if (!newPassword) {
                throw new Error('New password is required');
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Log the hashedPassword
            console.log('Hashed Password:', hashedPassword);

            return this.userService.updatePassword(userId, updatePasswordDto, hashedPassword);
        } catch (error) {
            console.error('Error updating password:', error);
            throw new InternalServerErrorException('Failed to update password');
        }
    }
  

 
}
