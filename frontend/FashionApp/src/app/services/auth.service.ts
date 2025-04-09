import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private api = "http://localhost:5000"
  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  logout() {
    const check = localStorage.getItem('token');
    if (check) {
      localStorage.removeItem('token');
    }
  }

  userLogin(data: any) {

    return this.http.post(`${this.api}/user/login`, data)
  }

  signUp(data: any) {
    return this.http.post(`${this.api}/user/signup`, data)
  }


  vendorLogin(data:any){

    return this.http.post(`${this.api}/vendors/loginvendor`, data)
  }

  vendorsignup(data:any){
    return this.http.post(`${this.api}/vendors/addvendor`, data)

  }

 isVendorLoggedIn(): boolean {
    return !!localStorage.getItem("vendortoken");
  }

  vendorlogout() {
    const check = localStorage.getItem('vendortoken');
    if (check) {
      localStorage.removeItem('vendortoken');
    }
  }
}



