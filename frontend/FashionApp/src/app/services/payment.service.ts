import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private selectedPaymentMethod: string = ''; // Stores the selected payment method
  private paymentMethods = [
    { id: 1, name: 'Credit/Debit Card', logo: 'assets/card-logo.png' },
    { id: 2, name: 'Net Banking', logo: 'assets/netbanking-logo.png' },
    { id: 3, name: 'UPI', logo: 'assets/upi-logo.png' },
    { id: 4, name: 'Wallets', logo: 'assets/wallet-logo.png' },
    { id: 5, name: 'Cash on Delivery', logo: 'assets/cod-logo.png' }
  ];

  constructor(private productService: ProductService) {}

  // Get available payment methods
  getPaymentMethods() {
    return this.paymentMethods;
  }

  // Set the selected payment method
  setSelectedPaymentMethod(method: string): void {
    this.selectedPaymentMethod = method;
    console.log(`Selected Payment Method: ${method}`);
  }

  // Get the selected payment method
  getSelectedPaymentMethod(): string {
    return this.selectedPaymentMethod;
  }

  // Process payment and clear cart on success
  processPayment(): Promise<string> {
    return new Promise((resolve, reject) => {
      const cart = this.productService.cart;
      if (this.selectedPaymentMethod && cart.length > 0) {
        setTimeout(() => {
          // Simulating success/failure logic
          Math.random() > 0.2 // 80% success rate
            ? resolve('Payment successful! Your items will be shipped soon.')
            : reject('Payment failed! Please try again.');
        }, 2000); // Simulate API delay
      } else if (!this.selectedPaymentMethod) {
        reject('No payment method selected.');
      } else {
        reject('Your cart is empty.');
      }
    });
  }
}
