import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './add-vendor/add-vendor.component';

const routes: Routes = [
  {path: '', redirectTo: 'add-vendor', pathMatch: 'full'},
  {path:'add-vendor',component: AddVendorComponent},
  {path:'delete-vendor/:id',component: AddVendorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
