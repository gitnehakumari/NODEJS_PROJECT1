import { Controller, Post } from '@nestjs/common';
import {CreateUserDto} from './dtos/create-user.dto';
import {Body} from '@nestjs/common'
import { UserssService } from './userss.service';
@Controller('auth')
export class UserssController {
    constructor(private usersService:UserssService){}
    @Post('/signup')
    createUser(@Body() body:CreateUserDto){
        console.log('body',body);
        this.usersService.create(body.email,body.password)

    }
}
