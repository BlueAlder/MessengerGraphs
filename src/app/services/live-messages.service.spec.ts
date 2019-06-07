import { TestBed } from '@angular/core/testing';

import { LiveMessagesService } from './live-messages.service';

describe('LiveMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveMessagesService = TestBed.get(LiveMessagesService);
    expect(service).toBeTruthy();
  });
});
