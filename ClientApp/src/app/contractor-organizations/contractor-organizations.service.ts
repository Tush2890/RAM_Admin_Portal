import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractorOrganizationsService {

  getContractorsDetails(): any[] {
    return [
      {
        'ContractorOrgId': 'tf100', 'Name': '24-7 Home Rescue',
        'Accounts': [{ email: 'traj490@gmail.com', notify: false }, 
        { email: 'tushar.raj@honeywell.com', notify: false }]
      },
      { 'ContractorOrgId': 'ac285', 'Name': 'ABC', 'Accounts': [] },
      { 'ContractorOrgId': 'tf100', 'Name': '24-7 Home Rescue', 'Accounts': [] },
      { 'ContractorOrgId': 'ac285', 'Name': 'ABC', 'Accounts': [] },
      { 'ContractorOrgId': 'tf100', 'Name': '24-7 Home Rescue', 'Accounts': [] },
      { 'ContractorOrgId': 'ac285', 'Name': 'ABC', 'Accounts': [] },
      { 'ContractorOrgId': 'tf100', 'Name': '24-7 Home Rescue', 'Accounts': [] },
      { 'ContractorOrgId': 'ac285', 'Name': 'ABC', 'Accounts': [] },
      { 'ContractorOrgId': 'tf100', 'Name': '24-7 Home Rescue', 'Accounts': [] }
    ];
  }

  constructor() { }
}
