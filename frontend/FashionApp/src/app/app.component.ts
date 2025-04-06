import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FashionApp';
  // constructor(private router: Router) { }

  // navigateToBothRoutes() {
  //   this.router.navigate([
  //     { outlets: { primary: 'makeup', secondary: 'clothing' } }
  //   ]);
  // }
  userIsLoggedIn: boolean = false;
  constructor(private authService:AuthService){}
  ngOnInit(){
    if(this.authService.isLoggedIn()){
      this.userIsLoggedIn = true;
    }else{
      this.userIsLoggedIn = false;
    }
  }
  logout() {
    this.authService.logout();
    window.location.reload(); // Reload the page to reflect the logout
    console.log("Logged out successfully");
  }
}
