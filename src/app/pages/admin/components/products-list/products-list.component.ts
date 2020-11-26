import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService
      .getAllProducts()
      .subscribe((results) => (this.products = results));
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((result) => {
      const index = this.products.findIndex((product) => product.id === id);
      this.products.splice(index, 1);
      this.products = [...this.products];
    });
  }
}
