import { TestBed, inject } from '@angular/core/testing';

import { BoilersService } from './boilers.service';

describe('BoilersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoilersService]
    });
  });

  it('should be created', inject([BoilersService], (service: BoilersService) => {
    expect(service).toBeTruthy();
  }));
});
