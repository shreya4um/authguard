import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isUser: boolean = false; // Tracks if the user is logged in

  constructor(private authService: AuthService, private router: Router) {
    this.checkUserStatus();
  }

  // Check user status on component initialization
  private checkUserStatus(): void {
    this.isUser = this.authService.isLoggedIn(); // Use AuthService to check login status
  }
  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.isUser = false; // Update isUser status
    this.router.navigate(['/home']); // Redirect to the login page
  }

}
