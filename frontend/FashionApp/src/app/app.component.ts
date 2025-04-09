import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FashionApp';

  userIsLoggedIn: boolean = false;
  vendorIsLoggedIn: any;
  Profile: string = "User"
  constructor(private authService: AuthService) { }
  ngOnInit() {
    interval(4000).subscribe(()=>{
      const token = localStorage.getItem('token');
      if (token) {
        const data = JSON.parse(token);
        this.Profile = data.user.email.name;
      } else {
        console.error('Token not found in localStorage');
      }
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()
  }
  // if(this.authService.isLoggedIn()){
  //   this.userIsLoggedIn = true;
  // }else{
  //   this.userIsLoggedIn = false;
  // }

  logout() {
    this.authService.logout();
    window.location.reload(); // Reload the page to reflect the logout
    console.log("Logged out successfully");
  }


  isvendorLoggedIn() {
    return this.authService.isVendorLoggedIn()
  }

  vendorlogout() {
    this.authService.vendorlogout();
    window.location.reload(); // Reload the page to reflect the logout
    console.log("Logged out successfully");
  }



}



