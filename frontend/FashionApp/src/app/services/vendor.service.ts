import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from '../model/product.interface';
// import { Vendor } from './vendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:5000/vendors'; 
  
  // BehaviorSubject to maintain current state of vendors
  private _vendors = new BehaviorSubject<any[]>([]);
  public readonly vendorsSubject = this._vendors.asObservable();
  
  constructor(private http: HttpClient) {}
  
  // Get all vendors
  getVendors(): void {
    this.http.get<any[]>(this.apiUrl+'/viewallvendors')
      .pipe(
        tap(vendors => {
          this._vendors.next(vendors);
        }),
        catchError(error => {
          console.error('Error fetching vendors', error);
          return [];
        })
      )
      .subscribe();
  }
  
  // Add new vendor
  addVendor(vendor: any): void {
    this.http.post<any>(this.apiUrl+'/addvendor', vendor)
      .pipe(
        tap(newVendor => {
          // Update the list with the new vendor
          const currentVendors = this._vendors.getValue();
          this._vendors.next([...currentVendors, newVendor]);
        }),
        catchError(error => {
          console.error('Error adding vendor', error);
          return [];
        })
      )
      .subscribe();
  }
  
  // Update existing vendor
  updateVendor(vendor: any): void {
    this.http.put<any>(`${this.apiUrl}/updatevendor/${vendor.id}`, vendor)
      .pipe(
        tap(updatedVendor => {
          // Update the vendor in the list
          const currentVendors = this._vendors.getValue();
          const index = currentVendors.findIndex(v => v.id === updatedVendor.id);
          if (index !== -1) {
            currentVendors[index] = updatedVendor;
            this._vendors.next([...currentVendors]);
          }
        }),
        catchError(error => {
          console.error('Error updating vendor', error);
          return [];
        })
      )
      .subscribe();
  }
  
  // Delete vendor
  deleteVendor(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        tap(() => {
          // Remove the vendor from the list
          const currentVendors = this._vendors.getValue();
          this._vendors.next(currentVendors.filter(vendor => vendor.id !== id));
        }),
        catchError(error => {
          console.error('Error deleting vendor', error);
          return [];
        })
      )
      .subscribe();
  }

  /**
   * Add a new product for a vendor.
   * @param product The product details to add.
   * @param vendorId The ID of the vendor associated with the product.
   * @returns Observable with the added product details.
   */
  addProduct(product: IProduct, vendorId: number): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.apiUrl}/${vendorId}/product/add`, product);
  }

  /**
   
   * @param product The product details with updated values.
   * @param vendorId The ID of the vendor associated with the product.
   * @returns Observable with the updated product details.
   */
  updateProduct(product: IProduct, vendorId: number): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.apiUrl}/${vendorId}/product/update/:id/${product.id}`, product);
  }

  /**
   * Delete a product by its ID for a vendor.
   * @param productId The ID of the product to delete.
   * @param vendorId The ID of the vendor associated with the product.
   * @returns Observable to indicate the deletion status.
   */
  deleteProduct(productId: number, vendorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${vendorId}/product/delete/:id/${productId}`);
  }
}








// INSERT INTO Vendor_ecom (name, email, password, phone) VALUES 
// ('Alice Smith', 'alice.smith@example.com', 'password123', '5551234567'),
// ('Bob Johnson', 'bob.johnson@example.com', 'securepass456', '5559876543'),
// ('Charlie Brown', 'charlie.brown@example.com', 'qwerty789', '5556789012'),
// ('Diana Prince', 'diana.prince@example.com', 'wonderwoman', '5554321987'),
// ('Ethan Hunt', 'ethan.hunt@example.com', 'impossibleMission', '5552468101'),
// ('Fiona Gallagher', 'fiona.g@example.com', 'shameless456', '5551357924'),
// ('George Miller', 'george.m@example.com', 'passGeorge123', '5551928374'),
// ('Hannah Baker', 'hannah.b@example.com', '13reasonswhy', '5559182736'),
// ('Ian Wright', 'ian.w@example.com', 'wrightPass!', '5551029384'),
// ('Jane Doe', 'jane.doe@example.com', 'doeJane2024', '5555647382');
