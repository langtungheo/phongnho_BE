import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductAttributes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'unit', type: 'varchar' })
  unit: string;
}
