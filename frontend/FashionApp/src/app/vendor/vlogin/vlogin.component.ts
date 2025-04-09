import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vlogin',
  standalone: false,
  templateUrl: './vlogin.component.html',
  styleUrl: './vlogin.component.css'
})
export class VloginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  isInvalid(controlName: string): any {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    this.authService.vendorLogin(this.loginForm.value).subscribe((res:any)=>{
      localStorage.setItem('vendortoken',res.token)
    })
    if (this.loginForm.valid) {
      let token: any;
      this.authService.vendorLogin(this.loginForm.value).subscribe(
        (res:any) => {
          token = res.data.token;
          console.log(token);



            // SweetAlert success message
          if(token){
            localStorage.setItem('vendortoken',token)
            Swal.fire({
              icon: 'success',
              title: 'Login Successful!',
              text: 'Welcome back!',
              timer: 3000, // Auto-close after 3 seconds
              showConfirmButton: false
            });
            
            
          }
          console.log('Form Submitted', this.loginForm.value);
      
          // window.location.reload();
          this.router.navigate(['/vendor-product-management']); 
        },
        (error:any) => {
         
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid credentials or server error.',
          });

          console.error('Error:', error.message);
        }
      );
    } else {
      // SweetAlert error message for invalid form
      Swal.fire({
        icon: 'error',
        title: 'Form Invalid',
        text: 'Please fill in the form correctly before submitting.',
      });

      console.log('Form is invalid.');
    }
  }
}


