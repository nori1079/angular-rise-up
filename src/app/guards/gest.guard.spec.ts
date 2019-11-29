import { TestBed, async, inject } from '@angular/core/testing';

import { GestGuard } from './gest.guard';

describe('GestGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestGuard]
    });
  });

  it('should ...', inject([GestGuard], (guard: GestGuard) => {
    expect(guard).toBeTruthy();
  }));
});
