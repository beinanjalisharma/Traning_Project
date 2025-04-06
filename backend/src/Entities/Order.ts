import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { OrderItem } from "./OrderItem";


@Entity('Order_ecom')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.order)
  user: User;

  @Column({nullable:true})
  total_price: number;


  @Column({nullable:true})
  status: "pending" | "shipped," | "delivered";


  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[]



}





