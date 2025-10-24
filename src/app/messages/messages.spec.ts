import { TestBed } from '@angular/core/testing';
import { MessageService } from '../message'; // <-- Use correct SERVICE class name

describe('MessageService', () => { // <-- Use correct SERVICE class name
  let service: MessageService; // <-- Use correct SERVICE class name

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService); // <-- Use correct SERVICE class name
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});