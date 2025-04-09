import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DisplayCartComponent } from './cart/cart/display-cart.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { LoginComponent } from './user/login/login.component';
import { VloginComponent } from './vendor/vlogin/vlogin.component';
import { VsignupComponent } from './vendor/vsignup/vsignup.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'contactUs',component:ContactComponent},
  {path:'aboutUs',component:AboutComponent},
 
  // { path: 'user/login', component: LoginComponent },
  { path: 'cart', component: DisplayCartComponent},
  {path: 'login', component: LoginComponent},
  {path:'vlogin',component:VloginComponent},
  {path:'vsignup',component:VsignupComponent},
  { path: 'shop', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'payment', loadChildren:()=> import("./payment/payment.module").then(m=>m.PaymentModule) },
  {path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) }
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
