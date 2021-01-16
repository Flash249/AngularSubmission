import { TestBed } from '@angular/core/testing';

import { Exercise2AverageMarksService } from './exercise2-average-marks.service';

describe('Exercise2AverageMarksService', () => {
  let service: Exercise2AverageMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise2AverageMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
