import { Component, OnInit } from '@angular/core';
import { UserSessionService } from '../../../core/services/user-session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  email: string | null = null;

  constructor(private session: UserSessionService) {}

  ngOnInit(): void {
      this.session.session$.subscribe(user => {
        this.email = user?.email || null;
      })
  }

  logout(): void {
    this.session.clearSession();
  }
}
