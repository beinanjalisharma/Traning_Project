import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
  desription: string;
  image_url: string;
}

interface User {
  name: string;
  email: string;
  role: string;
  products: Product[];
}



@Component({
  selector: 'app-customer-management',
  standalone: false,
  templateUrl: './customer-management.component.html',
  styleUrl: './customer-management.component.css'
})
export class CustomerManagementComponent {

  UserList: User[] = [];
  selectedProducts: Product[] = [];
  showProductsDialog: boolean = false;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe((data:any) => {
      this.UserList = data;
    })
  }

  
  openProductsDialog(products: Product[]): void {
    this.selectedProducts = products;
    this.showProductsDialog = true;
  }

  closeProductsDialog(): void {
    this.showProductsDialog = false;
  }
}






