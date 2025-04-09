import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const value = this.authService.isLoggedIn();
    console.log(value);

    if (value) {
      return true; // If the user is authenticated, allow access
    }

    // // Redirect to login page if not authenticated
    this.router.navigate(['/login']);
    return false;
  }
}
