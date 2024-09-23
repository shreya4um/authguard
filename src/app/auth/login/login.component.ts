import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    const { username, password } = form.value;

    // Simulate login (replace with your actual authentication logic)
    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']); // Navigate to user page on success
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
