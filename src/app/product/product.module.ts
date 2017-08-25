import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent}
    ]),
    CommonModule
  ],
  declarations: [ProductComponent, ProductListComponent]
})
export class ProductModule { }
