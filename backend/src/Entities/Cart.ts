import { Column,PrimaryGeneratedColumn,Entity, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";


@Entity('Cart_ecom')
export class Cart{
    @PrimaryGeneratedColumn()
    id:number;

 @ManyToOne(()=>User)
 user:User;


 @ManyToOne(()=>Product)
 product:Product;

 @Column()
 quantity:number;


}