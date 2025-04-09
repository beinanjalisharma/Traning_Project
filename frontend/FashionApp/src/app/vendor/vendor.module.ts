import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorProductsComponent } from './vendor-products/vendor-products.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorProductManagementComponent } from './vendor-product-management/vendor-product-management.component';
import { VendorsidebarComponent } from './vendorsidebar/vendorsidebar.component';
import { VloginComponent } from './vlogin/vlogin.component';
import { VsignupComponent } from './vsignup/vsignup.component';


@NgModule({
  declarations: [
    VendorDashboardComponent,
    VendorProductsComponent,
    VendorOrdersComponent,
   
    VendorProductManagementComponent,
    VendorsidebarComponent,
    VloginComponent,
    VsignupComponent,
 
  
    
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    FormsModule,
   ReactiveFormsModule
    
  ]
})
export class VendorModule { }
