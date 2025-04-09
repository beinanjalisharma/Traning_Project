import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:5000/payments'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  /**
   * @description
   * Confirm a payment for an order.
   * @param orderId The ID of the order to confirm payment for.
   * @param paymentMethod The payment method (e.g., "COD").
   * @returns Observable indicating success or failure.
   */
  confirmPayment(orderId: number, paymentMethod: 'COD'): Observable<any> {
    const paymentDetails = {
      orderId,
      paymentMethod,
    };
    return this.http.post<any>(`${this.apiUrl}/confirm`, paymentDetails);
  }

  /**
   * Fetch payment status for an order.
   * @param orderId The ID of the order.
   * @returns Observable containing the payment status.
   */
  getPaymentStatus(orderId: number): Observable<{ status: string }> {
    return this.http.get<{ status: string }>(`${this.apiUrl}/status/${orderId}`);
  }
}
