import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserssController } from './userss.controller';
import { UserssService } from './userss.service';
import { Userss } from './userss.entity';
@Module({
    imports:[TypeOrmModule.forFeature([Userss])],
    controllers:[UserssController],
    providers:[UserssService]
})
export class UserssModule {
    
}
