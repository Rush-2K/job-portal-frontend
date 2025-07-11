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

  private sessionSubject = new BehaviorSubject<LoggedInUser | null>(null)
  session$ = this.sessionSubject.asObservable();

  private readonly USER_KEY = 'user';
  private readonly TOKEN_KEY = 'token';

  constructor() { }

  setUserSession(user: LoggedInUser): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    localStorage.setItem(this.TOKEN_KEY, user.token);
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

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearSession(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.sessionSubject.next(null);
  }
}
