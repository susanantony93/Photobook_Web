import { TestBed } from '@angular/core/testing';

import { AllServiceService } from './all-service.service';

describe('AllServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllServiceService = TestBed.get(AllServiceService);
    expect(service).toBeTruthy();
  });
});
