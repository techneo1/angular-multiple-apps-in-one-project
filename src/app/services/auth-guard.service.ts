
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // if (!this.authService.isRouteAccessible()) {
    if(true) {
      console.log("FALSE");
      this.router.navigate(['/not-found']);
      return false;
    }
    console.log("TRUE");
    return true;
  }
}
