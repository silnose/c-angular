import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //public productsCount = 0;
  public total$: Observable<number>;
  constructor(private cartService: CartService) {
    // with subscribe
    // this.cartService.cart$.subscribe((products) => {
    //   console.log(products);
    //   this.productsCount = products.length;
    // });
    //with pipe
    // this.cartService.cart$
    //   .pipe(map((products) => products.length))
    //   .subscribe((total) => (this.productsCount = total));
    //with pipe observable
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {}
}
