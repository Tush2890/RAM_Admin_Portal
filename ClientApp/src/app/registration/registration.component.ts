import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/appConfig';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private _http: HttpClient, private _config: AppConfig) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      appName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      appRegister: new FormControl('', Validators.required),
      roleId: new FormControl('', Validators.required),
      contractorId: new FormControl('', Validators.required),
      secretValue: new FormControl({ value: '', disabled: true }, Validators.required)
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls };

  clearFormControls() {
    this.registerForm.reset();
  }

  generateSecretKey() {
    this._http.get<Observable<string>>(`${this._config.setting.baseUrl}/AppRegistrations/GenerateSecretKey`).subscribe(key => {
      this.f.secretValue.setValue(key);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

}
