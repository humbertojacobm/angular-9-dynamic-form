import { TestBed } from '@angular/core/testing';

import { Question.ServiceService } from './question.service.service';

describe('Question.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Question.ServiceService = TestBed.get(Question.ServiceService);
    expect(service).toBeTruthy();
  });
});
