import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../azure-authentication/authentication.service';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private _navBarService : NavBarService) { }

  ngOnInit() {
    this._navBarService.visible = false;
  }

  doLogin() {
    this._authService.startAuthentication();
  }
}
