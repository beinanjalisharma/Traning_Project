import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";



@Entity('Vendor_ecom')
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    name: string;


    @Column({ type: "varchar", nullable: true })
    email: string;


    @Column({ type: "varchar", nullable: true })
    password: string;

    @Column({ type: "varchar", nullable: true })
    phone: string;


    @OneToMany(() => Product, (product) => product.vendor)
    products: Product[];
}