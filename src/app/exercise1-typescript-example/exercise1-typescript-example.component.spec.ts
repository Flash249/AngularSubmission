import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1TypescriptExampleComponent } from './exercise1-typescript-example.component';

describe('Exercise1TypescriptExampleComponent', () => {
  let component: Exercise1TypescriptExampleComponent;
  let fixture: ComponentFixture<Exercise1TypescriptExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise1TypescriptExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise1TypescriptExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
