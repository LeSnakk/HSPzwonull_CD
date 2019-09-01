import { TestBed } from '@angular/core/testing';

import { AnmeldungenService } from './anmeldungen.service';

describe('AnmeldungenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnmeldungenService = TestBed.get(AnmeldungenService);
    expect(service).toBeTruthy();
  });
});
