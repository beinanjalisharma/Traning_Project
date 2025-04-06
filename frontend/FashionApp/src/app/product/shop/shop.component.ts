import { Component, OnInit } from '@angular/core';


interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  standalone:false,
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 499, imageUrl: 'assets/images/tshirt.jpg' },
    { id: 2, name: 'Jeans', price: 999, imageUrl: 'assets/images/jeans.jpg' },
    { id: 3, name: 'Jacket', price: 1999, imageUrl: 'assets/images/jacket.jpg' },
    { id: 4, name: 'Sneakers', price: 1499, imageUrl: 'assets/images/sneakers.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
