import { Controller, Get, Post, Param, Body,Delete, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';

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
}
