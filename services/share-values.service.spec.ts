import { TestBed } from '@angular/core/testing';

import { ShareValuesService } from './share-values.service';

describe('ShareValuesService', () => {
  let service: ShareValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
