import { Injectable } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/config/appConfig';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  constructor(private http: HttpClient, private _config: AppConfig) { }

  updateVariable(variableId: string, variable: Variables): Observable<any> {
    return this.http.put<Observable<any>>(`${this._config.setting.baseUrl}/Variables/${variableId}`, variable)
  }

  getVariables(): Observable<Variables[]> {
    return this.http.get<Variables[]>(`${this._config.setting.baseUrl}/Variables`);
  };
}

export class Variables {
  ID: number;
  VariableId: string;
  Name: string;
  Color: string;
  DeviceType: string;
  MaxValue: number;
  MinValue: number;
  SeriesType: string;
  Unit: string;
  Description: string;
  VariableType: string;
  DataPointsSource: string;
  // AxeTitle: string;
  // AxeUnit: string;
  // AxePosition: string;
}


