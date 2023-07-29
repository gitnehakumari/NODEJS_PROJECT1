import {AfterInsert,AfterRemove,AfterUpdate,
    Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Userss{
@PrimaryGeneratedColumn()
 id:number;

@Column("varchar", { nullable: true})
 email:string;

@Column("varchar", { nullable: true})
 password:string;
 @AfterInsert()//whenever new value will be inserted to database t his will get executed
 logInsert(){
    console.log("inserted user with Id")

 }
 @AfterRemove()
 logRemove(){
    
 }
}
