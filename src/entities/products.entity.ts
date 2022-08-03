import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categorys } from './categorys.entity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'card_desc', type: 'varchar', length: 250 })
  card_desc: string;

  @Column({ name: 'short_desc', type: 'varchar', length: 1000 })
  short_desc: string;

  @Column({ name: 'long_desc', type: 'varchar' })
  long_desc: string;

  @ManyToOne(() => Categorys, (categorys) => categorys.id)
  categorys: Categorys;

  @Column({ name: 'images', type: 'varchar', nullable: true })
  images: string;
}
