import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../serveis/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    const ok = this.authService.login(this.email, this.password);

    if (ok) {
      this.router.navigate(['/preferits']);
    } else {
      this.error = true;
    }
  }
}