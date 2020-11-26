import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  /**
   * Get all product
   */
  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  /**
   * Get one specific product
   * @param id => Product Identifier
   */
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }
  /**
   * New product
   * @param product => Product to be created
   */
  addProduct(product: Product) {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  /**
   * Update product
   * @param id => Product identifier
   * @param changes => attributes to be updated
   */
  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put<Product>(
      `${environment.url_api}/products/${id}`,
      changes
    );
  }
  /**
   * Delete one product
   * @param id => Product identifier
   */
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
