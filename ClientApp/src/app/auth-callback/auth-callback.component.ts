import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../azure-authentication/authentication.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthenticationService,
    private _zone: NgZone) { }

  ngOnInit() {
    this._authService.completeAuthentication();

    setTimeout(() => {
      this._zone.run(
        () => this._router.navigate(['/RAMAdmin'])
      );
    }, 200);
  }
}
