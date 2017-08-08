import { TestBed, inject } from '@angular/core/testing';

import { MusicAppService } from './music-app.service';

describe('MusicAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicAppService]
    });
  });

  it('should be created', inject([MusicAppService], (service: MusicAppService) => {
    expect(service).toBeTruthy();
  }));
});
