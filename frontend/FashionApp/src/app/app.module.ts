import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

import { ApiRouteInterceptor } from './global/interceptor';
import { VendorModule } from './vendor/vendor.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CartModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    VendorModule,
    PaymentModule,
    OrderModule
    // SharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiRouteInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
