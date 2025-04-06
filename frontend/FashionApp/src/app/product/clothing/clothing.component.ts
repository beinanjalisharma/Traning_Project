import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-clothing',
  standalone: false,
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  myClothingList: IProduct[] = [];
  num: number = 4;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.myClothingList = data.filter((product: IProduct) => product.category === 'clothing');
    });
  }

  showAllProducts = false;

  AddToCart(Cart: IProduct) {
    this.productService.AddToCart(Cart);

    // SweetAlert for success message
    Swal.fire({
      title: 'Success!',
      text: 'Item added to cart successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#007bff'
    });
  }

  showMore() {
    this.showAllProducts = true;
  }

  showLess() {
    this.showAllProducts = false;
  }
}
