import { Component } from '@angular/core';
import { VendorService } from '../../../services/vendor.service';

@Component({
  selector: 'app-vendor-management',
  standalone: false,
  templateUrl: './vendor-management.component.html',
  styleUrl: './vendor-management.component.css'
})
export class VendorManagementComponent {
  vendors: any[] = []; // Store the list of vendors

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.getVendors();
  }

  // Fetch vendor data from the backend
  getVendors(): void {
    this.vendorService.getAllVendors().subscribe(
      (data: any) => {
        this.vendors = data; // Assign fetched vendors to the array
      },
      (error) => {
        console.error('Error fetching vendors:', error);
      }
    );
  }
}
