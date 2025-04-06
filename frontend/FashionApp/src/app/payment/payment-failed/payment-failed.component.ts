import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.css'],
  standalone:false
})
export class PaymentFailedComponent {
  constructor(private router: Router) {}

  retryPayment(): void {
    this.router.navigate(['/payment']);
  }
}
