import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface OrderData{
  subtotal:number;
  discount:number;
  total:number;
  paymentMethod:string;
  couponApplied:boolean;
  couponCode:string|any;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private backendUrl = 'http://localhost:5000/orders/orders'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

placeOrder(orderData:any):Observable<any>{
  console.log("This is from order service price",orderData.total);
  
  return this.http.post<any>(this.backendUrl,{total_price:orderData.total});
}



validateCoupon(couponCode:string):Observable<any>
{
  return this.http.get<any>(`${this.backendUrl}/validate-coupon/${couponCode}`)
}}
