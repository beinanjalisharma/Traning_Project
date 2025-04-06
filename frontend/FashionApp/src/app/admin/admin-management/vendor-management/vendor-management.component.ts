import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VendorService } from '../../../services/vendor.service';
// import { Vendor } from '';


@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css'],
  standalone: false
})
export class VendorManagementComponent implements OnInit ,OnDestroy{
 

  vendors: any[] = [];
  loading = false;
  error: string | null = null;
  showAddVendorModal = false;
  isEditMode = false;
  vendorForm: FormGroup;
  currentVendorId: number | null = null;

  private subscription: Subscription = new Subscription();

  constructor(
    private vendorService: VendorService,
    private fb: FormBuilder
  ) {
    // Initialize form
    this.vendorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  ngOnInit(): void {
    this.loadVendors();

    // Subscribe to vendor updates
    this.subscription.add(
      this.vendorService.vendorsSubject.subscribe(
        (vendors) => {
          this.vendors = vendors;
          this.loading = false;
        },
        (error) => {
          this.error = "Failed to load vendors. Please try again.";
          this.loading = false;
        }
      )
    );
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    this.subscription.unsubscribe();
  }

  loadVendors(): void {
    this.loading = true;
    this.error = null;
    this.vendorService.getVendors();
  }

  openAddVendorModal(): void {
    this.isEditMode = false;
    this.currentVendorId = null;
    this.vendorForm.reset();
    this.showAddVendorModal = true;
  }

  editVendor(vendor: any): void {
    this.isEditMode = true;
    this.currentVendorId = vendor.id;
    this.vendorForm.patchValue({
      name: vendor.name,
      email: vendor.email,
      phone: vendor.phone
    });
    this.showAddVendorModal = true;
  }

  closeModal(): void {
    this.showAddVendorModal = false;
    this.vendorForm.reset();
  }

  saveVendor(): void {
    if (this.vendorForm.invalid) {
      return;
    }

    const vendorData: any = {
      ...this.vendorForm.value
    };

    if (this.isEditMode && this.currentVendorId !== null) {
      vendorData.id = this.currentVendorId;
      this.vendorService.updateVendor(vendorData);
    } else {
      this.vendorService.addVendor(vendorData);
    }

    this.closeModal();
  }

  deleteVendor(id: number): void {
    if (confirm('Are you sure you want to delete this vendor?')) {
      this.vendorService.deleteVendor(id);
    }
  }
}