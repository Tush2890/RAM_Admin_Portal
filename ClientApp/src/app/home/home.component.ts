import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../azure-authentication/authentication.service';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: String = "";
  constructor(private _authService: AuthenticationService, private _navBarService : NavBarService) { }

  ngOnInit() {
    // this.name = this._authService.getName();
    this._navBarService.visible = true;
  }

  public signout(): void {
    this._authService.signout();
  }
}
