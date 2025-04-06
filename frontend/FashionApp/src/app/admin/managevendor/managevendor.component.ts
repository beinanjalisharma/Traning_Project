import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-managevendor',
  standalone: false,
  templateUrl: './managevendor.component.html',
  styleUrl: './managevendor.component.css'
})
export class ManagevendorComponent {
  vendors: any[] = []; // Stores the list of vendors
  addVendorForm!: FormGroup; // Form for adding a vendor
  updateVendorForm!: FormGroup; // Form for updating vendor details
  selectedVendor: any = null; // Stores vendor being updated
  showAddForm: boolean = false; // Toggle visibility of Add Vendor form
  showUpdateForm: boolean = false; // Toggle visibility of Update Vendor form

  constructor(
    private vendorService: VendorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllVendors();
    this.initializeForms();
  }

  // Initialize forms for adding and updating vendors
  initializeForms(): void {
    this.addVendorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });

    this.updateVendorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  // Fetch all vendors
  getAllVendors(): void {
    this.vendorService.getAllVendors().subscribe(
      (data: any) => {
        this.vendors = data; // Assign vendors to the list
      },
      (error: any) => {
        console.error('Error fetching vendors:', error);
      }
    );
  }

  // Add a vendor
  addVendor(): void {
    if (this.addVendorForm.valid) {
      this.vendorService.addVendor(this.addVendorForm.value).subscribe(
        (data: any) => {
          this.vendors.push(data); // Add the new vendor to the list
          this.addVendorForm.reset(); // Reset the form
          this.showAddForm = false; // Hide the form
        },
        (error:any) => {
          console.error('Error adding vendor:', error);
        }
      );
    }
  }

  // Delete a vendor
  deleteVendor(vendorId: number): void {
    if (confirm('Are you sure you want to delete this vendor?')) {
      this.vendorService.deleteVendor(vendorId).subscribe(
        () => {
          this.vendors = this.vendors.filter((vendor) => vendor.id !== vendorId); // Remove the vendor from the list
        },
        (error:any) => {
          console.error('Error deleting vendor:', error);
        }
      );
    }
  }

  // Populate the Update Vendor form with selected vendor's details
  editVendor(vendor: any): void {
    this.selectedVendor = vendor;
    this.updateVendorForm.patchValue(vendor);
    this.showUpdateForm = true;
  }

  // Update vendor details
  updateVendor(): void {
    if (this.updateVendorForm.valid && this.selectedVendor) {
      this.vendorService
        .updateVendor(this.selectedVendor.id, this.updateVendorForm.value)
        .subscribe(
          (data: any) => {
            const index = this.vendors.findIndex(
              (vendor) => vendor.id === this.selectedVendor.id
            );
            this.vendors[index] = data; // Update vendor in the list
            this.updateVendorForm.reset(); // Reset the form
            this.showUpdateForm = false; // Hide the form
            this.selectedVendor = null; // Clear the selected vendor
          },
          (error:any) => {
            console.error('Error updating vendor:', error);
          }
        );
    }
  }

}
