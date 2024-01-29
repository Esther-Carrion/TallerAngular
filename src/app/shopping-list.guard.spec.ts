import { TestBed } from '@angular/core/testing';

import { ShoppingListGuard } from './shopping-list.guard';

describe('ShoppingListGuard', () => {
  let guard: ShoppingListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShoppingListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
