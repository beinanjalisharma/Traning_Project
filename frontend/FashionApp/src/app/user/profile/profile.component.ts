import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 editEmail(): void {
    const newEmail = prompt("Enter new email:");
    if (newEmail) {
      const emailElement = document.getElementById("email");
      if (emailElement) {
        emailElement.innerText = newEmail;
      }
    }
  }
  
  // Function to edit address
 editAddress(): void {
    const newAddress = prompt("Enter new address:");
    if (newAddress) {
      const addressElement = document.getElementById("address");
      if (addressElement) {
        addressElement.innerText = newAddress;
      }
    }
  }
  
  // Placeholder for saved items
 viewSavedItems(): void {
    alert("Redirecting to Saved Items...");
  }
  
  // Placeholder for order history
  viewOrderHistory(): void {
    alert("Redirecting to Order History...");
  }
  
  // Placeholder for edit profile
  editProfile(): void {
    alert("Opening Edit Profile Section...");
  }
  
  // Placeholder for payment methods
 managePayments(): void {
    alert("Redirecting to Payment Methods...");
  }
  
  // Placeholder for tracking orders
   trackOrders(): void {
    alert("Opening Track Orders Section...");
  }
  

}
