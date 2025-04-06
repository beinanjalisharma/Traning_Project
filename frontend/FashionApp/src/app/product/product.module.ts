import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ClothingComponent } from './clothing/clothing.component';
import { MakeupComponent } from './makeup/makeup.component';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    ClothingComponent,
    MakeupComponent,
    ShopComponent

  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [ClothingComponent,
    MakeupComponent,]
})

export class ProductModule { }
