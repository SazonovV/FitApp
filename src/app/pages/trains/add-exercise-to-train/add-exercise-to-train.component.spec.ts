import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseToTrainComponent } from './add-exercise-to-train.component';

describe('AddExerciseToTrainComponent', () => {
  let component: AddExerciseToTrainComponent;
  let fixture: ComponentFixture<AddExerciseToTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExerciseToTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseToTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
