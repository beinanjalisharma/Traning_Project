import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminDashboardService } from '../../services/adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone: false,
})
export class AdminDashboardComponent implements OnInit {
  vendors: any[] = []; // Stores vendor list
  customers: any[] = []; // Stores customer list
  addVendorForm!: FormGroup; // Reactive Form for adding a vendor
  showAddVendorForm: boolean = false; // Controls the visibility of the Add Vendor form

  constructor(
    private fb: FormBuilder,
    private adminDashboardService: AdminDashboardService
  ) {}

  ngOnInit(): void {
    this.getVendors();
    this.getCustomers();
    this.initializeForm(); 
  }

 
  initializeForm(): void {
    this.addVendorForm = this.fb.group({
      name: ['', Validators.required], 
      contact: [
        '',
        [Validators.required, Validators.pattern(/^\d{10}$/)], 
      ],
    });
  }

  // Toggle Add Vendor Form
  toggleAddVendorForm(): void {
    this.showAddVendorForm = !this.showAddVendorForm;
  }

  // Fetch Vendors from backend
  getVendors(): void {
    this.adminDashboardService.getVendors().subscribe(
      (data) => {
        this.vendors = data; // Assign fetched vendors to the array
      },
      (error) => {
        console.error('Error fetching vendors:', error); // Log error if fetching fails
      }
    );
  }

  // Fetch Customers from backend
  getCustomers(): void {
    this.adminDashboardService.getCustomers().subscribe(
      (data) => {
        this.customers = data; // Assign fetched customers to the array
      },
      (error) => {
        console.error('Error fetching customers:', error); // Log error if fetching fails
      }
    );
  }

  // Add Vendor Method
  onAddVendor(): void {
    if (this.addVendorForm.valid) {
      // Check if form is valid
      this.adminDashboardService.addVendor(this.addVendorForm.value).subscribe(
        (data) => {
          this.vendors.push(data); 
          this.addVendorForm.reset(); 
          this.showAddVendorForm = false; 
        },
        (error) => {
          console.error('Error adding vendor:', error); 
        }
      );
    }
  }

  // Remove Vendor Method
  removeVendor(id: number): void {
    this.adminDashboardService.removeVendor(id).subscribe(
      () => {
        this.vendors = this.vendors.filter((vendor) => vendor.id !== id); 
      },
      (error) => {
        console.error('Error removing vendor:', error); 
      }
    );
  }
}
