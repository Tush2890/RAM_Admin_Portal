import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorOrganizationsComponent } from './contractor-organizations/contractor-organizations.component';
import { CreateorupdateContractorComponent } from './createorupdate-contractor/createorupdate-contractor.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChartsComponent } from './charts/charts.component';
import { VariablesComponent } from './variables/variables.component';
import { BoilersComponent } from './boilers/boilers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'RAMAdmin', component: HomeComponent },
  { path: 'contractors', component: ContractorOrganizationsComponent },
  { path: 'updateContractor', component: CreateorupdateContractorComponent },
  { path: 'AppRegistration', component: RegistrationComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'boilers', component: BoilersComponent }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
