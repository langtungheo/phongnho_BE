import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.uid)
  user: User;

  @Column({ name: 'country', type: 'varchar' })
  country: string;

  @Column({ name: 'city', type: 'varchar' })
  state: string;

  @Column({ name: 'state', type: 'varchar' })
  city: string;

  @Column({ name: 'email_verify', type: 'tinyint', default: 0 })
  email_verify: number;

  @Column({ name: 'address', type: 'varchar' })
  address: string;

  @Column({ name: 'address2', type: 'varchar' })
  address2: string;

  @Column({ name: 'user_registration_date', type: 'timestamp' })
  user_registration_date: number;
}
