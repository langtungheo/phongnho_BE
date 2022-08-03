import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductAttributes } from './productAttribute.entity';
import { Products } from './products.entity';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Products, (products) => products.id)
  products: Products;

  @Column({ name: 'live', type: 'tinyint', default: 0 })
  live: number;

  @Column({ name: 'unlimited', type: 'tinyint', default: 0 })
  unlimited: number;

  @Column({ name: 'stock', type: 'float' })
  stock: number;

  @Column({ name: 'price', type: 'float' })
  price: number;

  @ManyToOne(() => ProductAttributes, (productAttribute) => productAttribute.id)
  productAttribute: ProductAttributes;

  @Column({ name: 'option_values', type: 'json' })
  option_values: string[];
}
