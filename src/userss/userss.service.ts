import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Userss} from './userss.entity'
@Injectable()
export class UserssService {

    constructor(@InjectRepository(Userss) private repo: Repository<Userss>){
        this.repo=repo

    }
    create(email:string,password:string){
      console.log('email',email)
      const user = this.repo.create({email,password});
      return this.repo.save(user)
    }
}
