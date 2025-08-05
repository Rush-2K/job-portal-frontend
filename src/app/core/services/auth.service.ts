import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserSessionService } from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8080/api/auth';
  private regApiUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient, private session: UserSessionService) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap({
        next: (res: any) => {
          this.session.setUserSession(res.data);
          console.log('data' + res.data);
        }
      })
    );
  }

  registration(name: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(this.regApiUrl, { name, email, password, role }).pipe(
      tap({
        next: (res: any) => {
          console.log('data' + res.data);
        }
      })
    );
  }
}
