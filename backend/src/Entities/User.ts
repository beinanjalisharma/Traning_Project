import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";



@Entity('User_ecom2')
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",length:255,nullable:true})
    name:string;


    @Column({type:"varchar",length:255,unique:true,nullable:true})
    email:string;
    

    @Column({type:"varchar",length:255,nullable:true})
    password:string;
  

    @Column({type:"varchar",length:255,nullable:true})
    role:string; //Role Based access


    @OneToMany(()=>Product,(product)=>product.vendor)
    products:Product[];

    @OneToMany(()=>Order,(order)=>order.user)
    order:Order[]

}