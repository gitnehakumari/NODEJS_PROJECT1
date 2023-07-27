import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Userss{
    @PrimaryGeneratedColumn()
 id:number;
@Column()
 email:string;
@Column()
 passwoord:string;
}
