import { TokenInterceptor } from './token.interceptor';
import { UserSessionService } from '../services/user-session.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let mockSession: jasmine.SpyObj<UserSessionService>;

  beforeEach(() => {
    mockSession = jasmine.createSpyObj('UserSessionService', ['getToken']);
    interceptor = new TokenInterceptor(mockSession);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if token exists', () => {
    mockSession.getToken.and.returnValue('test-token');
    const request = new HttpRequest('GET', '/api/test');
    const handler: HttpHandler = {
  handle: req => {
    expect(req.headers.get('Authorization')).toBe('Bearer test-token');
    return of({} as HttpEvent<any>);
  }
};

    interceptor.intercept(request, handler);
  });
});
