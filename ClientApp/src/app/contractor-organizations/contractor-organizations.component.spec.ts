import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorOrganizationsComponent } from './contractor-organizations.component';

describe('ContractorOrganizationsComponent', () => {
  let component: ContractorOrganizationsComponent;
  let fixture: ComponentFixture<ContractorOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
