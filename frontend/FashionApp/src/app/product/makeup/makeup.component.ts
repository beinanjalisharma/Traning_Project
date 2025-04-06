import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.interface';

@Component({
  selector: 'app-makeup',
  standalone: false,
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
  showAllProducts = false;
  num: number = 4;
  makeUpList: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.makeUpList = data.filter((product: IProduct) => product.category === 'makeup');
      console.log(this.makeUpList);
    });
  }

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
