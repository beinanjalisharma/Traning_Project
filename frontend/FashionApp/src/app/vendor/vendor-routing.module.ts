import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorProductManagementComponent } from './vendor-product-management/vendor-product-management.component';


const routes: Routes = [
  {path:'vendor-product-management',component:VendorProductManagementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
