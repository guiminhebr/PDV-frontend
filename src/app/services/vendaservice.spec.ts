import { TestBed } from '@angular/core/testing';

import { Vendaservice } from './vendaservice';

describe('Vendaservice', () => {
  let service: Vendaservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vendaservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
