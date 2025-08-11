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

  private readonly EMAIL = 'email';
  private readonly TOKEN = 'token';
  private readonly ROLE = 'role';
  private readonly USER_ID = 'userId';

  constructor() { }

  setUserSession(user: LoggedInUser): void {
    localStorage.setItem(this.EMAIL, user.email);
    localStorage.setItem(this.USER_ID, user.userId.toString());
    localStorage.setItem(this.TOKEN, user.token);
    localStorage.setItem(this.ROLE, user.role);
    this.sessionSubject.next(user); // to notify the components
  }

  getUser(): LoggedInUser | null {
    const user = localStorage.getItem(this.EMAIL);
    return user ? JSON.parse(user) : null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN);
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
    localStorage.removeItem(this.EMAIL);
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.ROLE);
    localStorage.removeItem(this.USER_ID);
    this.sessionSubject.next(null);
  }
}
