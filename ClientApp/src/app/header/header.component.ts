import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { AuthenticationService } from '../azure-authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _navBar: NavBarService, private _authService: AuthenticationService) { }

  ngOnInit() {
    
  }

  public signout(): void {
    this._authService.signout();
  }
}
