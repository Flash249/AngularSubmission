import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5ParentComponentComponent } from './exercise5-parent-component.component';

describe('Exercise5ParentComponentComponent', () => {
  let component: Exercise5ParentComponentComponent;
  let fixture: ComponentFixture<Exercise5ParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise5ParentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5ParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
