import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LoggedInUser {
  email: string;
  role: string;
  userId: number;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  // BehaviorSubject holds the current session state
  private sessionSubject = new BehaviorSubject<LoggedInUser | null>(null)
  session$ = this.sessionSubject.asObservable();

  private readonly USER_KEY = 'user';
  private readonly TOKEN_KEY = 'token';
  private readonly ROLE = 'role';

  constructor() { }

  setUserSession(user: LoggedInUser): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.TOKEN_KEY, user.token);
    localStorage.setItem(this.ROLE, user.role);
    this.sessionSubject.next(user); // to notify the components
  }

  getUser(): LoggedInUser | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getEmail(): string | null {
    return this.getUser()?.email || null;
  }

  getUserRole(): string | null {
  return localStorage.getItem('role');
}


  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearSession(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.sessionSubject.next(null);
  }
}
