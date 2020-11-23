import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.model';

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
  addToCart(): void {
    console.log('holis');
    this.clickAddToCart.emit(this.product.id);
  }
}
