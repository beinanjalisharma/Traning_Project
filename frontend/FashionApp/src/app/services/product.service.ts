import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:5000/product/getall')
  }
  addProduct(product: IProduct) {
    return this.http.post('http://localhost:5000/products', product);
  }
  updateProduct(product: IProduct) { 
    return this.http.put(`http://localhost:5000/products/${product.id}`, product);
  }
  deleteProduct(productId: number) {
    return this.http.delete(`http://localhost:5000/products/${productId}`);
  }
  getProductById(productId: number) {
    return this.http.get<IProduct>(`http://localhost:5000/products/${productId}`);
  }
 
cart:any[]=[]
  AddToCart(Cart:any){
    this.cart.push(Cart)

  }

 

  
}















































































// makeupProducts: IProduct[] = [
//   { id: 1, name: 'Lipstick', price: 499, imageUrl: 'lipstick.jpg' },
//   { id: 2, name: 'Foundation', price: 999, imageUrl: '/foundation.jpg' },
//   { id: 3, name: 'Mascara', price: 799, imageUrl: '/mascara.jpg' },
//   { id: 4, name: 'Eyeshadow', price: 599, imageUrl: '/eyeshadow.jpg' },
//   { id: 5, name: 'Blush', price: 499, imageUrl: 'blush.jpg' },
//   { id: 6, name: 'Concealer', price: 899, imageUrl: 'concealer.jpg' },
//   { id: 7, name: 'Highlighter', price: 699, imageUrl: 'highlighter.jpg' },
//   { id: 8, name: 'Primer', price: 799, imageUrl: 'primer.jpg' },
//   { id: 9, name: 'Setting Spray', price: 599, imageUrl: '/settingspray.jpg' },
//   { id: 10, name: 'Brow Pencil', price: 399, imageUrl: '/browpencil.jpg' },
//   { id: 11, name: 'Eyeliner', price: 499, imageUrl: '/eyeliner' },
//   { id: 12, name: 'Lip Gloss', price: 299, imageUrl: 'lipbalm.jpg' },
//   { id: 13, name: 'Contour Kit', price: 1199, imageUrl: '/contourkit.jpg' },
//   { id: 14, name: 'Nail Polish', price: 199, imageUrl: '/nailpolish.jpg' },
//   { id: 15, name: 'Bronzer', price: 599, imageUrl: '/bronzer.jpg' },
//   { id: 16, name: 'Lip Liner', price: 299, imageUrl: 'lipliner.jpg' },
//   { id: 17, name: 'Makeup Remover', price: 499, imageUrl: '/makeup remover.jpg' },
//   { id: 18, name: 'Compact Powder', price: 699, imageUrl: '/compactpowder.jpg' },
//   { id: 19, name: 'BB Cream', price: 799, imageUrl: '/bbcream.jpg' },
//   { id: 20, name: 'Eyelash Curler', price: 399, imageUrl: '/eyelashcurler.jpg' },
//   { id: 21, name: 'Makeup Blender', price: 249, imageUrl: '/blender.jpg' },
//   { id: 22, name: 'Makeup Brush Set', price: 1499, imageUrl: '/brushset.jpg' },
//   { id: 23, name: 'Lip Balm', price: 199, imageUrl: '/lipbalmm.jpg' },
//   { id: 24, name: 'Compact Mirror', price: 299, imageUrl: '/compact mirror.jpg' }
// ];

// clothingProducts: IProduct[] = [
// { id: 1, name: 'T-Shirt', price: 499, imageUrl: '/tshirt.jpg' },
// { id: 2, name: 'Jeans', price: 999, imageUrl: '/jeans.jpg' },
// { id: 3, name: 'Jacket', price: 1999, imageUrl: '/jacket' },
// { id: 4, name: 'Sneakers', price: 1499, imageUrl: '/sneakers.jpg' },
// { id: 5, name: 'Cap', price: 299, imageUrl: '/cap.jpg' },
// { id: 6, name: 'skirt', price: 799, imageUrl: '/skirt.jpg' },
// { id: 7, name: 'shorts', price: 2499, imageUrl: '/shorts.jpg' },
// { id: 8, name: 'Backpack', price: 999, imageUrl: '/backpack.jpg' },
// { id: 9, name: 'Belt', price: 399, imageUrl: '/belt.jpg' },
// { id: 10, name: 'Wallet', price: 499, imageUrl: '/wallet.jpg' },
// { id: 11, name: 'Tie', price: 199, imageUrl: '/tie.jpg' },
// { id: 12, name: 'Shirt', price: 799, imageUrl: '/shirt.jpg' },
// { id: 13, name: ' Long Skirt', price: 599, imageUrl: '/longskirt.jpg' },
// { id: 14, name: 'Sweater', price: 1499, imageUrl: '/sweater.jpg' },
// { id: 15, name: 'Scarf', price: 299, imageUrl: '/scarf.jpg' },
// { id: 16, name: 'Gloves', price: 399, imageUrl: '/glove.jpg' },
// { id: 17, name: 'Hat', price: 499, imageUrl: '/hat.jpg' },
// { id: 18, name: 'Boots', price: 1999, imageUrl: '/boots.jpg' },
// { id: 19, name: 'Sandals', price: 699, imageUrl: '/sandals.jpg' },
// { id: 20, name: 'Coat', price: 2999, imageUrl: '/coat.jpg' },
// { id: 21, name: 'Socks', price: 199, imageUrl: '/socks.jpg' },
// { id: 22, name: 'Beanie', price: 249, imageUrl: '/beanie.jpg' },
// { id: 23, name: 'Blazer', price: 3499, imageUrl: '/blazer.jpg' },
// { id: 24, name: 'Suit', price: 4999, imageUrl: '/suits.jpg' }
// ];



