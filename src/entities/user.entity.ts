import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uid', type: 'varchar', unique: true })
  uid: string;

  @Column({ name: 'FirstName', type: 'varchar' })
  firstName: string;

  @Column({ name: 'lastName', type: 'varchar' })
  lastName: string;

  @Column({ name: 'Email', type: 'varchar', length: 300 })
  email: string;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'Password', type: 'varchar' })
  password: string;
}
