import { Component, inject, OnInit } from '@angular/core';
import { OrderData, OrderService } from '../../services/order.service';
import { PaymentService } from '../../services/payment.service';
import { DisplayCartComponent } from '../../cart/cart/display-cart.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: false,
})
export class PaymentComponent implements OnInit {
  subtotal: number = 0;
  discount: number = 0;
  total: number = this.subtotal;
  paymentMethod: string = 'cod'; // Default to Cash on Delivery
  couponCode: string = '';
  couponApplied: boolean = false;
  couponError: string = '';
  isLoading: boolean = false;
  orderSuccess: boolean = false;
  orderError: string = '';

  readonly VALID_COUPON: string = 'Anjali15';
  readonly DISCOUNT_PERCENT: number = 15;


  constructor(private orderService: OrderService, private productService: ProductService) {
    const orderData = this.productService.cart

    orderData.map(item=>{
      this.subtotal =  this.subtotal+item.price
    })

  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.subtotal - this.discount;
  }

  handleCouponSubmit(): void {
    if (this.couponCode.trim() === this.VALID_COUPON) {
      if (!this.couponApplied) {
        const discountAmount = (this.subtotal * this.DISCOUNT_PERCENT) / 100;
        this.discount = discountAmount;
        this.couponApplied = true;
        this.couponError = '';
        this.calculateTotal();
      }
    } else {
      this.couponError = 'Invalid coupon code';
    }
  }

  removeCoupon(): void {
    this.couponCode = '';
    this.couponApplied = false;
    this.discount = 0;
    this.couponError = '';
    this.calculateTotal();
  }
  placeOrder(): void {

    // category
    // :
    // "clothing"
    // desription
    // :
    // "Durable and fashionable jeans"
    // id
    // :
    // 74
    // image_url
    // :
    // "/jeans.jpg"
    // name
    // :
    // "Jeans"
    // price
    // :
    // 999
    // stock
    // :
    // 100



    console.log(this.productService.cart);


    this.isLoading = true;
    this.orderError = '';

    // Prepare the order data
    const orderData: OrderData = {
      subtotal: this.subtotal,
      discount: this.discount,
      total: this.total,
      paymentMethod: this.paymentMethod,
      couponApplied: this.couponApplied,
      couponCode: this.couponApplied ? this.couponCode : undefined
    };

    // Call the order service
    this.orderService.placeOrder(orderData)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.orderSuccess = true;
          console.log('Order placed successfully', response);
          // You can handle redirects here, e.g., to an order confirmation page
        },
        error: (error) => {
          this.isLoading = false;
          this.orderError = 'Failed to place your order. Please try again.';
          console.error('Order placement failed', error);
        }
      });
  }
}

