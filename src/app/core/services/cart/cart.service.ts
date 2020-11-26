import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); //
  public cart$ = this.cart.asObservable(); // Variable publica para que cualquier se suscriba a el y pueda consultarla
  constructor() {}

  addCart(product: Product) {
    this.products = [...this.products, product]; // inmutabilidad actualizo el array de productos en el carrito
    this.cart.next(this.products); // aviso a los suscriptores que hay un cambio
  }
}
