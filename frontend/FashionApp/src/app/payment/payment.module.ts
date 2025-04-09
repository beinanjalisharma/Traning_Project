import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   PaymentComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule
  ]
})
export class PaymentModule { }
