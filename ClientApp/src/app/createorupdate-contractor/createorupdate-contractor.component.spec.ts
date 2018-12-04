import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorupdateContractorComponent } from './createorupdate-contractor.component';

describe('UpdateContractorComponent', () => {
  let component: CreateorupdateContractorComponent;
  let fixture: ComponentFixture<CreateorupdateContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateorupdateContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorupdateContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
