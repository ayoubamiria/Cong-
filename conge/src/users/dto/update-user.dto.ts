import { IsString, IsDate, IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsString()
    @IsOptional()
    readonly firstName?: string;

    @IsString()
    @IsOptional()
    readonly lastName?: string;
    @IsString()
    @IsOptional()
    readonly role?: string;
    @IsString()
    @IsOptional()
    readonly picture?: string;

    @IsDate()
    @IsOptional()
    readonly birthdate?: string;

    // Ajoutez d'autres champs si nécessaire, mais n'incluez pas le mot de passe
}
//modifier le mot de passe 
export class UpdatePasswordDto {
    @IsString()
    @MinLength(8)
    currentPassword: string;

    @IsString()
    @MinLength(8)
    newPassword: string;
}
