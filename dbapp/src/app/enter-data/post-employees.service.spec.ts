import { TestBed } from '@angular/core/testing';

import { PostEmployeesService } from './post-employees.service';

describe('PostEmployeesService', () => {
  let service: PostEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
