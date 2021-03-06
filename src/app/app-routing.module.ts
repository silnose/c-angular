import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guard/admin/admin.guard';
import { PreloadService } from '@core/services/preload/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
        data: { preload: true },
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
        data: { preload: true },
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./pages/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    initialNavigation: 'enabled'
}),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
