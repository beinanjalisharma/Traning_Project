import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PaymentGuard } from '../Guard/payment.guard';

const routes: Routes = [
  { path: 'product-payment', component: PaymentComponent, canActivate: [PaymentGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
