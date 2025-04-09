import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2'; 
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css'],
  standalone: false,
})
export class DisplayCartComponent {
  cartItems: any[] = [];
  CartList: any[] = [];
  isAuthenticated=true;

  // @Output() cartListSent = new EventEmitter<any[]>();
  cartListSubject = new BehaviorSubject<any[]>(this.CartList);

  constructor(private productService: ProductService, private router: Router) {
    this.CartList = this.productService.cart;
    this.cartListSubject.next(this.CartList);
    // this.cartListSent.emit(this.CartList);
  }

  getTotalAmount() {
    return this.CartList.reduce((total, item) => total + item.price, 0);
  }

  removeItem(itemName: string) {
    this.CartList = this.CartList.filter(item => item.name !== itemName);
  }

  placeOrder() {
    if (this.isAuthenticated){
      
      this.router.navigate(['/product-payment']);
    }else{
      Swal.fire({
        title: 'Login First!',
        text: 'You need to log in before placing an order.',
        icon: 'warning',
        confirmButtonText: 'OK',
      })
      
      
      this.router.navigate(['/user/login'])
    }
  
   
    
  }}
