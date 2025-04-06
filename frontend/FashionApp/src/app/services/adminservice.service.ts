import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AdminDashboardService {
  private apiUrl = "http://localhost:5000/admin";

  constructor(private http: HttpClient) {}

  // Fetch all vendors
  getVendors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vendors`);
  }

  // Fetch all customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customers`);
  }

  // Fetch all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  // Add a new vendor
  addVendor(vendor: { name: string; contact: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vendor/add`, vendor);
  }

  // Remove a vendor
  removeVendor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/vendor/remove/${id}`);
  }

  // Update vendor details
  updateVendor(vendor: { id: number; name: string; contact: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/vendor/update`, vendor);
  }
}
