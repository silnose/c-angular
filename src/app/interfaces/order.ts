import { Product } from './product.model';

export interface Order {
  quantity: number;
  product: Product;
}
