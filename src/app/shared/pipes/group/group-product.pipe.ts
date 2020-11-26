import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product.model';
@Pipe({
  name: 'groupProducts',
})
export class GroupProductPipe implements PipeTransform {
  transform(products: Product[]): any {
    const orderProducts: Order[] = [];
    if (products.length > 0) {
      products.forEach((product) => {
        const quantity = products.reduce(
          (acum, element) => (product.id === element.id ? acum + 1 : acum),
          0
        );
        if (!orderProducts.some(({ product: { id } }) => id === product.id)) {
          orderProducts.push({ product, quantity });
        }
      });
      console.log(orderProducts);
    }
    return orderProducts;
  }
}
