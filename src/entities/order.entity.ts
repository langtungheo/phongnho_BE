import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.uid)
  user: User;

  @Column({ name: 'amount', type: 'float' })
  amount: number;

  @Column({ name: 'ship_name', type: 'varchar', length: 100 })
  ship_name: string;

  @Column({ name: 'ship_address', type: 'varchar' })
  ship_address: string;

  @Column({ name: 'ship_address2', type: 'varchar', nullable: true })
  ship_address2: string;

  @Column({ name: 'city', type: 'varchar', length: 100 })
  city: string;

  @Column({ name: 'state', type: 'varchar', length: 100 })
  state: string;

  @Column({ name: 'country', type: 'varchar', length: 100 })
  country: string;

  @Column({ name: 'phone', type: 'varchar', length: 20 })
  phone: string;

  @Column({ name: 'shipping', type: 'float' })
  shipping: number;

  @Column({ name: 'tax', type: 'float', default: 0 })
  tax: number;

  @Column({ name: 'email', type: 'varchar', length: 300 })
  email: string;

  @Column({ name: 'date', type: 'timestamp' })
  date: number;

  @Column({ name: 'shipped', type: 'tinyint', default: 0 })
  shipped: number;

  @Column({ name: 'tracking_number', type: 'varchar', length: 100 })
  tracking_number: string;
}
