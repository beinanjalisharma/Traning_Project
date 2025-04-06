import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorProfileComponent } from './vendor-profile/vendor-profile.component';
import { FormsModule } from '@angular/forms';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ListVendorComponent } from './list-vendor/list-vendor.component';

@NgModule({
  declarations: [
    VendorDashboardComponent,
    VendorProductsComponent,
    VendorOrdersComponent,
    VendorProfileComponent,
    AddVendorComponent,
    ListVendorComponent,
    
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
    
  ]
})
export class VendorModule { }
