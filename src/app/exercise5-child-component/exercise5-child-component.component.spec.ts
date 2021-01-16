import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5ChildComponentComponent } from './exercise5-child-component.component';

describe('Exercise5ChildComponentComponent', () => {
  let component: Exercise5ChildComponentComponent;
  let fixture: ComponentFixture<Exercise5ChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise5ChildComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5ChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
