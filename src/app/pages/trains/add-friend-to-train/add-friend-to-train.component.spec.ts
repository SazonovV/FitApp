import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendToTrainComponent } from './add-friend-to-train.component';

describe('AddFriendToTrainComponent', () => {
  let component: AddFriendToTrainComponent;
  let fixture: ComponentFixture<AddFriendToTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendToTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendToTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
