import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/** Usuario válido del sistema (solo con fines educativos). */
const VALID_USER = {
  email: 'admin@biblioteca.com',
  password: '123456',
  name: 'Administrador',
};

const SESSION_KEY = 'biblioteca_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  /** Valida las credenciales y guarda la sesión en localStorage. */
  login(email: string, password: string): boolean {
    const isValid = email.trim().toLowerCase() === VALID_USER.email && password === VALID_USER.password;

    if (isValid) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ email: VALID_USER.email, name: VALID_USER.name }));
    }
    return isValid;
  }

  /** Elimina la sesión y redirige al login. */
  logout(): void {
    localStorage.removeItem(SESSION_KEY);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(SESSION_KEY) !== null;
  }

  getUserName(): string {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session).name : '';
  }
}
