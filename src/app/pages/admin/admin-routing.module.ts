import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { DatesComponent } from './components/dates/dates.component';
import { PdfComponent } from './components/pdf/pdf.component';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'products/create', component: ProductFormComponent },
      { path: 'products/edit/:id', component: ProductsEditComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'date', component: DatesComponent },
      { path: 'pdf', component: PdfComponent },
      { path: '', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class AdminRoutingModule {}
