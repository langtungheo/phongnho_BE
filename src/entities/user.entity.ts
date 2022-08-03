import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Email', type: 'varchar', length: 300 })
  email: string;

  @Column({ name: 'Password', type: 'varchar' })
  password: string;

  @Column({ name: 'FirstName', type: 'varchar' })
  firstName: string;

  @Column({ name: 'lastName', type: 'varchar' })
  lastName: string;
}
