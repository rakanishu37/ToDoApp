import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';

describe('ToDoListService', () => {
  let service: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
