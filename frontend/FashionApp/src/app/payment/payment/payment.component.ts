import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: false
})
export class PaymentComponent {
  selectedPaymentOption: string | null = null; // No default selection
selectedUPIOption: string | null = null;    // No UPI option selected

  processPayment() {
    if (this.selectedPaymentOption === 'UPI' && this.selectedUPIOption) {
      alert(`Payment processing through ${this.selectedUPIOption}... Thank you for your order!`);
    } else if (this.selectedPaymentOption === 'COD') {
      alert('Your order has been placed successfully! Thank you for choosing Cash on Delivery.');
    } else if (!this.selectedPaymentOption) {
      alert('Please select a payment option.');
    } else if (this.selectedPaymentOption === 'UPI' && !this.selectedUPIOption) {
      alert('Please select a UPI method.');
    }
  }

  selectPaymentOption(option: string) {
    this.selectedPaymentOption = option;
    if (option !== 'UPI') {
      this.selectedUPIOption = ''; // Reset UPI selection if it's not UPI
    }
  }

  selectUPIOption(option: string) {
    this.selectedUPIOption = option;
  }
 

}
