import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vsignup',
  standalone: false,
  templateUrl: './vsignup.component.html',
  styleUrl: './vsignup.component.css'
})
export class VsignupComponent {

 signupForm: FormGroup;
  isSignedUp: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone:['',[Validators.required,Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      // Show SweetAlert success message
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Successful!',
        text: 'You have been signed up successfully.',
        timer: 3000, // Closes automatically after 3 seconds
        showConfirmButton: false,
      });

      this.isSignedUp = true; 
      console.log('Form Submitted:', this.signupForm.value);

      setTimeout(() => {
        this.isSignedUp = false;
        this.signupForm.reset();
      }, 3000);
    } else {
      // Show SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Please fill out the form correctly before submitting.',
      });

      console.log('Form is invalid.');
      
    }
    this.authService.vendorsignup(this.signupForm.value).subscribe((item:any) => {
      console.log("Registered Successfully...!",item);
      
    })
  }
}


