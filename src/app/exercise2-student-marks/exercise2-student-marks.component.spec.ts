import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2StudentMarksComponent } from './exercise2-student-marks.component';

describe('Exercise2StudentMarksComponent', () => {
  let component: Exercise2StudentMarksComponent;
  let fixture: ComponentFixture<Exercise2StudentMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise2StudentMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise2StudentMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
