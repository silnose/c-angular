import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from '../../../../interfaces/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input()
  product!: Product;
  @Output() clickAddToCart = new EventEmitter<any>();
  //@Output() clickAddToCart = new EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService) {}
  addToCart(): void {
    console.log('holis');
    //this.clickAddToCart.emit(this.product.id);
    this.cartService.addCart(this.product);
  }
}
