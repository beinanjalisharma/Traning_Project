import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DisplayCartComponent } from './cart/cart/display-cart.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'cart', component: DisplayCartComponent},
  {path: 'login', component: LoginComponent},
  { path: 'shop', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) }
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
