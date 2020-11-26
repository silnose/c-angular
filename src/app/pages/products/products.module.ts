import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsContainer } from './components/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../../material/material.module';
@NgModule({
  declarations: [ProductsContainer, ProductDetailComponent, ProductComponent],
  imports: [CommonModule, SharedModule, ProductsRoutingModule, MaterialModule],

  providers: [],
})
export class ProductsModule {}
