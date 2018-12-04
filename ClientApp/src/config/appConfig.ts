import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

    private _config: { [key: string]: string };

    constructor() {
        this._config = {
          baseUrl: 'http://104.211.0.106/api'
        }
    }

    get setting(): { [key: string]: string } {
        return this._config;
    }
}

