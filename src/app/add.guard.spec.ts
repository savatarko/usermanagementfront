import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addGuard } from './add.guard';

describe('addGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
