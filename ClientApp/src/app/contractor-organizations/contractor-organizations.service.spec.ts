import { TestBed, inject } from '@angular/core/testing';

import { ContractorOrganizationsService } from './contractor-organizations.service';

describe('ContractorOrganizationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractorOrganizationsService]
    });
  });

  it('should be created', inject([ContractorOrganizationsService], (service: ContractorOrganizationsService) => {
    expect(service).toBeTruthy();
  }));
});
