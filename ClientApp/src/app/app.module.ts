import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContractorOrganizationsComponent } from './contractor-organizations/contractor-organizations.component';
import { RegistrationComponent } from './registration/registration.component';
import { BoilersComponent } from './boilers/boilers.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsComponent } from './charts/charts.component';
import { VariablesComponent } from './variables/variables.component';
import { AppRoutingModule } from './/app-routing.module';
import { CreateorupdateContractorComponent } from './createorupdate-contractor/createorupdate-contractor.component';
import { DeleteContractorComponent } from './delete-contractor/delete-contractor.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxTreeListModule, DxDataGridModule, DxDropDownBoxModule, DxButtonModule, DxSelectBoxModule, DxColorBoxModule } from 'devextreme-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ColorPickerModule } from 'ngx-color-picker';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AdalService } from 'adal-angular4';
import { AuthenticationService } from './azure-authentication/authentication.service';
import { AuthGuardService } from './azure-authentication/auth-guard-service.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContractorOrganizationsComponent,
    RegistrationComponent,
    BoilersComponent,
    HeaderComponent,
    ChartsComponent,
    VariablesComponent,
    CreateorupdateContractorComponent,
    DeleteContractorComponent,
    FooterComponent,
    AuthCallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DxTreeListModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ColorPickerModule,
    DxDataGridModule,
    HttpClientModule,
    DxDropDownBoxModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxColorBoxModule
  ],
  providers: [AuthGuardService, AuthenticationService, AdalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
