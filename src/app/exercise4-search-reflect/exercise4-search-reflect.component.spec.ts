import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4SearchReflectComponent } from './exercise4-search-reflect.component';

describe('Exercise4SearchReflectComponent', () => {
  let component: Exercise4SearchReflectComponent;
  let fixture: ComponentFixture<Exercise4SearchReflectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise4SearchReflectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise4SearchReflectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
