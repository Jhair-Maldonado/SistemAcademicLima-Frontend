import { TestBed } from '@angular/core/testing';

import { GeminiDiagnostic } from './gemini-diagnostic';

describe('GeminiDiagnostic', () => {
  let service: GeminiDiagnostic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeminiDiagnostic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
