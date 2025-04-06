import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeupComponent } from './makeup/makeup.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [

  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ShopComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
