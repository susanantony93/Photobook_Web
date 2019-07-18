import { TestBed } from '@angular/core/testing';

import { PhotographerService } from './photographer.service';

describe('PhotographerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotographerService = TestBed.get(PhotographerService);
    expect(service).toBeTruthy();
  });
});
