export class CreateUserDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: string;
    readonly picture: string;
    readonly birthdate: Date;
}
export default CreateUserDto;
