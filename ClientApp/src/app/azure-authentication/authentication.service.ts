import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdalService } from 'adal-angular4';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _config = {
    tenant: '96ece526-9c7d-48b0-8daf-8b93c90a5d18', //directory ID
    clientId: 'cc7a3aed-4818-4be8-926a-d33a56e924d5', //application ID
    redirectUri: "http://104.211.0.106/RAMAdmin",
    postLogoutRedirectUri: "http://104.211.0.106/login",
    clientSecret: 'DvwuPk7IO1FKr+QXS3Fd1QabIYT/F0shKKANsOkNnlo=',
    //todoListResourceId : 'a100ffaa-3ce3-4f41-8c4e-23ec43e14db7'
  }

  private _user = null;

  constructor(private http: HttpClient,
    private _adal: AdalService) {
    this._adal.init(this._config);
  }

  public isLoggedIn(): boolean {
    return this._adal.userInfo.authenticated;
  }

  public signout(): void {
    this._adal.logOut();
  }

  public startAuthentication(): any {
    this._adal.login();
  }

  public getName(): string {
    return this._user.profile.name;
  }

  public completeAuthentication(): void {
    this._adal.handleWindowCallback();
    this._adal.getUser().subscribe(user => {
      this._user = user;
      console.log(this._adal.userInfo);
      // var expireIn = user.profile.exp - new Date().getTime();
    });
  }
}
