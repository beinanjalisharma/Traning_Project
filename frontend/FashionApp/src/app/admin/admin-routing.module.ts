import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManagevendorComponent } from './managevendor/managevendor.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { VendorManagementComponent } from './admin-management/vendor-management/vendor-management.component';
import { ProductManagementComponent } from './admin-management/product-management/product-management.component';
import { CustomerManagementComponent } from './admin-management/customer-management/customer-management.component';

const routes: Routes = [
  {
    path: 'dashboard', component: AdminDashboardComponent,
    children: [
      // { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'vendor-management', component: VendorManagementComponent },
      { path: 'product-management', component: ProductManagementComponent },
      { path: 'customer-management', component: CustomerManagementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
