import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

xdescribe('AuthService', () => {
  let service: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
