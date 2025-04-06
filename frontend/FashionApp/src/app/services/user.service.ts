import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = "http://localhost:5000"
  constructor(private http: HttpClient) { }


  getAllUsers() {
    return this.http.get(`${this.api}/customor/users`)
  }

 
}