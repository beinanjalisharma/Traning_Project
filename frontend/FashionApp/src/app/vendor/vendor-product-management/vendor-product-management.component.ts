import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../model/product.interface';

@Component({
  selector: 'app-vendor-product-management',
  templateUrl: './vendor-product-management.component.html',
  styleUrls: ['./vendor-product-management.component.css'],
  standalone: false,
})
export class VendorProductManagementComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  showProductModal: boolean = false;
  isEditMode: boolean = false;
  productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    // Initialize the reactive form for products
    this.productForm = this.fb.group({
      id:[0],
      name: ['', Validators.required],
      price:['',Validators.required],
      category: ['', Validators.required],
      stock: [0, [Validators.required, Validators.min(0)]],
      image_url: [''], // Optional field for the product image URL
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.loading = true;
    this.productService.viewallProducts().subscribe({
      next: (data) => {
        // console.log("Vendor product",data);
        
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
        console.error('Error fetching products:', err);
      },
    });
  }

  openModal(editMode: boolean, product?: IProduct): void {
    this.isEditMode = editMode;
    this.showProductModal = true;

    if (editMode && product) {
      // Populate the form with the existing product data
      this.productForm.patchValue(product);
    } else {
      // Reset the form for adding a new product
      this.productForm.reset({ id: null, name: '',price:'', category: '', stock: 0, image_url: '' });
    }
  }

  closeModal(): void {
    this.showProductModal = false;
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log("From vendor product add component: ",productData);
      

      if (this.isEditMode) {
        // Update the existing product
        this.productService.updateProduct(productData).subscribe({
          next: () => {
            this.products = this.products.map((p) =>
              p.id === productData.id ? productData : p
            );
            console.log('Product updated successfully:', productData);
            this.closeModal();
          },
          error: (err) => {
            this.error = 'Failed to update product. Please try again later.';
            console.error('Error updating product:', err);
          },
        });
      } else {
        // Add a new product
        this.productService.addProduct(productData).subscribe({
          next: (newProduct) => {
            this.products.push(newProduct);
            console.log('Product added successfully:', newProduct);
            this.closeModal();
          },
          error: (err) => {
            this.error = 'Failed to add product. Please try again later.';
            console.error('Error adding product:', err);
          },
        });
      }
    }
  }

  deleteProduct(productId:number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products = this.products.filter((p) => p.id !== productId);
        console.log('Product deleted successfully');
      },
      error: (err) => {
        this.error = 'Failed to delete product.';
        console.error('Error deleting product:', err);
      },
    });
  }

  addProduct(){
    this.productService.addProduct(this.productForm.value).subscribe({
      next:(data)=>{
        console.log(data)
    this.fetchProducts();

      }

      
    })
  }

  deleteProduct1(){
    this.productService.deleteProduct(this.productForm.value).subscribe({
      next:(data)=>{
        console.log(data)
    this.fetchProducts();

      }

    })
}
updateProduct(){
  this.productService.updateProduct(this.productForm.value).subscribe({
    next:(data)=>{
      console.log(data)
      this.fetchProducts()
    }
  })
}

}