import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4ProductInformationComponent } from './exercise4-product-information.component';

describe('Exercise4ProductInformationComponent', () => {
  let component: Exercise4ProductInformationComponent;
  let fixture: ComponentFixture<Exercise4ProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise4ProductInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise4ProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
