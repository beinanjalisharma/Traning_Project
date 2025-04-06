import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../model/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css'],
  standalone:false
})
export class VendorDashboardComponent implements OnInit {
  products: IProduct[] = [];
  result: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  addProduct(product:IProduct): void {
    this.productService.addProduct(product).subscribe((data: any) => {
      this.result = data;
    });
    // Initialize a new product
  }

  editProduct(product: IProduct): void {
    this.result = { ...product }; // Clone the product for editing
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.getProducts(); // Refresh the product list
    });
  }

  saveProduct(product: IProduct): void {
    if (product.id === 0) {
      // Add new product
      this.productService.addProduct(product).subscribe(() => {
        this.getProducts();
        this.result = null;
      });
    } else {
      // Update existing product
      this.productService.updateProduct(product).subscribe(() => {
        this.getProducts();
        this.result = null;
      });
    }
  }

  cancelEdit(): void {
    this.result = null;
  }
}
