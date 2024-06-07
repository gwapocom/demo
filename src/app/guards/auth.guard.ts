import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

//  @Injectable({
//   providedIn: 'root'
// })

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() == false) {
    router.navigate(['/login']);
    return false;
  }
  return authService.isLoggedIn();
};

// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private auth: AuthService) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean {
//     if (!this.auth.isLoggedIn()) {
//       this.router.navigate(['/login']);
//     }
//     return this.auth.isLoggedIn();
//   }
// }
