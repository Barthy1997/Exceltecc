import { TestBed } from '@angular/core/testing';

import { AutheServiceService } from './authe-service.service';

describe('AutheServiceService', () => {
  let service: AutheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
