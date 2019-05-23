import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainComponent } from './new-train.component';

describe('NewTrainComponent', () => {
  let component: NewTrainComponent;
  let fixture: ComponentFixture<NewTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
