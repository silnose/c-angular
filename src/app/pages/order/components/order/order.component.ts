import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../../interfaces/product.model';

import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$.pipe(
      map((products) => {
        return products;
      })
    );
  }

  ngOnInit(): void {}
}
