import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contractor',
  templateUrl: './createorupdate-contractor.component.html',
  styleUrls: ['./createorupdate-contractor.component.css']
})
export class CreateorupdateContractorComponent implements OnInit {

  @ViewChild("btnRef", { read: ElementRef }) bref: ElementRef;
  @ViewChild("addAccountInput") aairef: ElementRef;

  registerForm: FormGroup;
  countries = [{ 'Name': 'Select Country' }, { 'Name': 'India' }, { 'Name': 'Australia' }, { 'Name': 'Bahrain' }, { 'Name': 'Croatia' }];
  contractorOrgTitle: string;
  contractorDetails;
  accounts;
  showAddAccountDiv: boolean = false;
  showEngineerAccounts: boolean = false;
  emailNotificationCountries = ['German(Germany)', 'Spanish(Spain, International Sort)', 'French(France)'];
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  showModal(modalBody: string) {
    if (modalBody != undefined) {
      this.contractorOrgTitle = 'Edit Contractor';
      this.showEngineerAccounts = true;
      this.setDetails(modalBody);
    } else {
      this.contractorOrgTitle = 'Create Contractor';
      this.showEngineerAccounts = false;
      this.clearFormDetails();
    }
    //open the modal
    this.bref.nativeElement.click();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  clearFormDetails() {
    this.f.name.reset();
    this.f.id.reset();
  }

  setDetails(contractorDetails) {
    this.f.name.setValue(contractorDetails.Name);
    this.f.id.setValue(contractorDetails.ContractorOrgId);
    this.accounts = contractorDetails.Accounts;
  }

  selection(account, checked) {
    account.notify = checked;
  }

  removeAccount(account) {
    this.accounts.splice(this.accounts.findIndex(x => x.email === account.email), 1);
  }

  addAccountBtn() {
    this.showAddAccountDiv = true;
  }

  addAccountToContractor() {
    this.accounts.push({ email: this.aairef.nativeElement.value, notify: false });
    this.aairef.nativeElement.value = '';
  }

  cancelAccountAddition() {
    this.showAddAccountDiv = false;
  }
}
