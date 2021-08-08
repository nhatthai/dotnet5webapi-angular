import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.auth.isAuthenticated$.subscribe(async isAuthenticated => {
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe(token => {
          env.auth.token = token;
          localStorage.setItem('access_token', token);
        });
      }
    });
  }

  logout(): void {
    this.auth.logout({returnTo: env.auth.redirectUri});
  }
}
