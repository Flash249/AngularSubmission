import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3CustomPipeComponent } from './exercise3-custom-pipe.component';

describe('Exercise3CustomPipeComponent', () => {
  let component: Exercise3CustomPipeComponent;
  let fixture: ComponentFixture<Exercise3CustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise3CustomPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise3CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
