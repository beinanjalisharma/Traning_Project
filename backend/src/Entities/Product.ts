import { User } from "./User";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


@Entity('Product_ecom')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({nullable:true})
  name: string;


  @Column({nullable:true})
  desription: string;

  @Column({nullable:true})
  stock: number;

  @Column({nullable:true})
  image_url: string;

  @Column({nullable:true})
  price: number;


  @Column({type:'varchar'})
  category:string;

  @ManyToOne(() => User, (user) => user.products)
  vendor: User;
}