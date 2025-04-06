import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css'],
  standalone: false,
})
export class DisplayCartComponent {
  cartItems: any[] = [];
  CartList: any[] = [];

  constructor(private productService: ProductService, private router: Router) {
    this.CartList = this.productService.cart;
  }

  getTotalAmount() {
    return this.CartList.reduce((total, item) => total + item.price, 0);
  }

  removeItem(itemName: string) {
    this.CartList = this.CartList.filter(item => item.name !== itemName);
  }

  placeOrder() {
  
    Swal.fire({
      title: 'Login First!',
      text: 'You need to log in before placing an order.',
      icon: 'warning',
      confirmButtonText: 'OK',
    }).then(() => {
     
      this.router.navigate(['/login']);
    });
  }
}
