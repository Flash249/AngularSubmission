import { TestBed } from '@angular/core/testing';

import { Exercise4ProductServiceService } from './exercise4-product-service.service';

describe('Exercise4ProductServiceService', () => {
  let service: Exercise4ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise4ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
