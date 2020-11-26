import { TestBed } from '@angular/core/testing';
import { RandomUsersService } from './random-users.service';

xdescribe('RandomUsersService', () => {
  let service: RandomUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
