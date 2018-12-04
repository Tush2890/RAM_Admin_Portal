import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/config/appConfig';


@Injectable()
export class BoilersService {

  constructor(private http: HttpClient, private _config : AppConfig) { }

  createBrand(data: any): Observable<any> {
    return this.http.post(`${this._config.setting.baseUrl}/Boilers`,
      { 'Brand': data.Brand, 'Family': data.Family, 'Model': data.Model });
  }

  getBoilers(): Observable<Boiler[]> {
    return this.http.get<Boiler[]>(`${this._config.setting.baseUrl}/Boilers`);
  }
}

export class Boiler {
  ID: number;
  Head_ID: number;
  Brand: string;
  Family: string;
  Model: string;
}