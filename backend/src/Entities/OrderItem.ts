import { ManyToOne, PrimaryGeneratedColumn ,Entity, ManyToMany, Column} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";


@Entity('OrderItem_ecom')
export class OrderItem{
    @PrimaryGeneratedColumn()
    id:number;


    @ManyToOne(()=>Order,(order)=>order.items)
    order:Order;

    @ManyToOne(()=>Product)
    product:Product;


    @Column({nullable:true})
    quantity:number;

    @Column({nullable:true})
    price:number;
}