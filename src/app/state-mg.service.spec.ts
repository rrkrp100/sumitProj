import { TestBed } from '@angular/core/testing';

import { StateMgService } from './state-mg.service';

describe('StateMgService', () => {
  let service: StateMgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateMgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
