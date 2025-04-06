import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ManagevendorComponent } from './managevendor/managevendor.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { VendorManagementComponent } from './admin-management/vendor-management/vendor-management.component';
import { CustomerManagementComponent } from './admin-management/customer-management/customer-management.component';
import { ProductManagementComponent } from './admin-management/product-management/product-management.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    ManagevendorComponent,
    ManageproductsComponent,
    AdminSidebarComponent,
    VendorManagementComponent,
    CustomerManagementComponent,
    ProductManagementComponent,

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
