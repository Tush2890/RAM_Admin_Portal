import { Component, OnInit } from '@angular/core';
import { ContractorOrganizationsService } from './contractor-organizations.service';

@Component({
  selector: 'app-contractor-organizations',
  templateUrl: './contractor-organizations.component.html',
  styleUrls: ['./contractor-organizations.component.css']
})
export class ContractorOrganizationsComponent implements OnInit {

  cotitle = 'Contractor Organizations';
  listOfcontractors = [];
  name: string;
  contractorDetail: {};
  showDeleteComponent: boolean;
  showUpdateContractorComponent: boolean;

  constructor(private contractorService: ContractorOrganizationsService) { 
    
  }

  ngOnInit() {
    this.getContractors();
  }

  getContractors() {
    this.listOfcontractors = this.contractorService.getContractorsDetails();
  }
}
