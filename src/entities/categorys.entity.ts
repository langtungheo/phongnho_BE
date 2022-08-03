import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorys {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;
}
