import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6HomeComponent } from './exercise6-home.component';

describe('Exercise6HomeComponent', () => {
  let component: Exercise6HomeComponent;
  let fixture: ComponentFixture<Exercise6HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise6HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise6HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
