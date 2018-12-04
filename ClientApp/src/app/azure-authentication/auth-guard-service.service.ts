import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private _authService: AuthenticationService) { }

  canActivate(): boolean {

    if (this._authService.isLoggedIn()) {
      return true;
    }
    this._authService.startAuthentication();
    return false;
  }
}
