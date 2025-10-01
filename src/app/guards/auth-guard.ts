import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
<<<<<<< HEAD
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  console.log(':::authGuard', authService.isAuthenticated());
  return authService.isAuthenticated();
};
=======
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  return auth.isAuthenticated();
};
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
