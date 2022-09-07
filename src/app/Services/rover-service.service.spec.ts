import { TestBed } from '@angular/core/testing';

import { RoverServiceService } from './rover-service.service';

describe('RoverServiceService', () => {
  let service: RoverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
