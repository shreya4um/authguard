


import { Component } from '@angular/core';

import { Router } from '@angular/router'; // Import Router to navigate after logout
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Optional: add your SCSS file here
})
export class HomeComponent {
  isUser: boolean = false; // Tracks if the user is logged in

  constructor(private authService: AuthService, private router: Router) {
    this.checkUserStatus();
  }

  // Check user status on component initialization
  private checkUserStatus(): void {
    this.isUser = this.authService.isLoggedIn(); // Use AuthService to check login status
  }

  // Logout method
  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.isUser = false; // Update isUser status
    this.router.navigate(['/home']); // Redirect to the login page
  }
}
