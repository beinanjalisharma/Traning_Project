import { Injectable } from '@angular/core';
import { ICartItem } from '../model/cartItem.interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: ICartItem[] = [];

  getCartItems(): ICartItem[] {
    return this.cartItems;
  }

  addItemToCart(item: ICartItem): void {
    this.cartItems.push(item);
  }

  removeItemFromCart(itemName: string): void {
    this.cartItems = this.cartItems.filter(item => item.name !== itemName);
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
