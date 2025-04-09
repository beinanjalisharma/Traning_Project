import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {  DisplayCartComponent } from './cart/display-cart.component';



@NgModule({
  declarations: [
    DisplayCartComponent,
  
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
