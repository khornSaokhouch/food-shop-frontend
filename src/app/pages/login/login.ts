// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  
  // 👈 New: State variable to hold error message
  errorMessage: string | null = null; 

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Clear previous errors
    this.errorMessage = null; 
    
    // Simple validation check before calling service
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }
    
    // Call the authentication service
    const success = this.authService.login(this.email, this.password);
    
    if (success) {
      this.router.navigate(['/']); // Redirect to home or a specific profile page
    } else {
      // 👈 Updated: Set the error message instead of using alert()
      this.errorMessage = 'Invalid email or password. Please try again.';
      this.password = ''; // Clear password field on failure
    }
  }
}