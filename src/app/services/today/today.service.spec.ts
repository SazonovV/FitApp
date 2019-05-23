import { TestBed } from '@angular/core/testing';

import { TodayService } from './today.service';

describe('TodayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodayService = TestBed.get(TodayService);
    expect(service).toBeTruthy();
  });
});
