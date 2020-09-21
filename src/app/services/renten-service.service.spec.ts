import { TestBed } from '@angular/core/testing';

import { RentenServiceService } from './renten-service.service';

describe('RentenServiceService', () => {
  let service: RentenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
