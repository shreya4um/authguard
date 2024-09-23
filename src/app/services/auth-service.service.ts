import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null; 

  constructor() {}


  login(username: string, password: string): boolean {

    const users = [
      { username: 'admin', password: 'admin123', role: 'executive' },
      { username: 'user1', password: 'user123', role: 'user' },
    ];

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      this.userRole = foundUser.role; 
      return true; // Login successful
    }
    return false; // Login failed
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.userRole !== null; // Check if user role is set
  }

  
  // Get user role
  getUserRole(): string | null {
    return this.userRole;
  }

  // Logout user
  logout(): void {
    this.userRole = null; // Clear user role
  }
}
