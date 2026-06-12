import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(Auth);
  private router = inject(Router);

  username = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Servidor local no disponible temporalmente.';
      }
    });
  }
}