import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:false
})
export class NavbarComponent {
  dropdowns = {
    vendor: false,
    customer: false,
    products: false,
  };

  constructor(private router: Router) {}

  // Toggles only the specific dropdown while keeping others open
  toggleDropdown(section: keyof typeof this.dropdowns): void {
    Object.keys(this.dropdowns).forEach(key => {
      if (key === section) {
        this.dropdowns[key] = !this.dropdowns[key];
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }}