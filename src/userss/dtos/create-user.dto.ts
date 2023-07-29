import {IsEmail,IsString} from 'class-validator'
export class CreateUserDto{
    @IsEmail()
    email: string;

     @IsString()
    password:string;
}

function EmailNotRegistered(arg0: { message: string; }) {
    throw new Error('Function not implemented.');
}
