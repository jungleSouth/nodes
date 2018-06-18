import { TestBed, inject } from '@angular/core/testing';

import { TimesServiceService } from './times-service.service';

describe('TimesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimesServiceService]
    });
  });

  it('should be created', inject([TimesServiceService], (service: TimesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
