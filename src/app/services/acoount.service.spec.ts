import { TestBed } from '@angular/core/testing';

import { AcoountService } from './acoount.service';

describe('AcoountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcoountService = TestBed.get(AcoountService);
    expect(service).toBeTruthy();
  });
});
