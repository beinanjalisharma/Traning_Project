import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private api = "http://localhost:5000"
  constructor(private http: HttpClient) 
  { }


  getAllVendors() {
    return this.http.get(`${this.api}/vendor/getallVendors`)
  }

  deleteVendor(userId:number){
    return this.http.delete(`${this.api}/vendor/delete/${userId}`);
  }

  getVendorById(userId:number){
    return this.http.get(`${this.api}/vendor/getVendor/${userId}`);
  }

  updateVendor(userId:number, data:any){
    return this.http.put(`${this.api}/user/update/${userId}`,data);
  }
  getVendorByEmail(email:string){
    return this.http.get(`${this.api}/user/getVendorbyemail/${email}`);
  }
addVendor(data:any){
  return this.http.post(`${this.api}/user/addVendor`,data);
}
}
