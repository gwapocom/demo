import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <p>
      admin-dashboard works!
    </p>

    <button (click)="logout()">logout</button>
  `,
  styles: `
  * {
    color: red;
     }
  `
})
export class AdminDashboardComponent {
  constructor(private auth: AuthService, private router: Router) {}
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
