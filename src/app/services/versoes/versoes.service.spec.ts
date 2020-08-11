import { TestBed } from '@angular/core/testing';

import { VersoesService } from './versoes.service';

describe('VersoesService', () => {
  let service: VersoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
