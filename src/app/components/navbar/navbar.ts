// src/app/components/navbar/navbar.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Assuming your AuthService path is correct
import { AuthService } from '../../auth.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html', // This points to the HTML provided below
  styleUrls: ['./navbar.css'] // This points to the CSS provided below
})
export class NavbarComponent {
  // 👈 State for controlling the mobile menu's visibility
  isMenuOpen: boolean = false; 

  // User state, initialized by subscription
  user: any = null; 

  constructor(private authService: AuthService) {
    // Subscribes to the user status stream to update the view automatically
    this.authService.user$.subscribe(u => this.user = u); 
  }

  logout() {
    this.authService.logout();
    // OPTIONAL: Close the menu when logging out on mobile
    this.isMenuOpen = false; 
  }
  
  // Method to close the menu after a link is clicked (used in HTML)
  closeMenu() {
    this.isMenuOpen = false;
  }
}