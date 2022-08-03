import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';
import { Products } from './products.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @ManyToOne(() => Products, (products) => products.id)
  products: Products;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'price', type: 'float' })
  price: number;

  @Column({ name: 'quantity', type: 'number' })
  quantity: number;
}
