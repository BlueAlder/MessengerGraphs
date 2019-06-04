import { TestBed } from '@angular/core/testing';

import { MessagesApiService } from './messages-api.service';

describe('MessagesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesApiService = TestBed.get(MessagesApiService);
    expect(service).toBeTruthy();
  });
});
