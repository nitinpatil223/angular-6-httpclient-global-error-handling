import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const productRoutes: Routes = [
  {
    path: '', 
    component: ProductsComponent,
    children: [
      { path: ':id/detail', component: ProductDetailComponent },
      { path:'', component: ProductListComponent,  }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductsComponent, ProductListComponent, ProductDetailComponent ]
})
export class ProductsRoutingModule { }
