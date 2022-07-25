import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { AuthService } from '@core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  isCollapsed = false; // TODO: isMobile?
  sub: Subscription;
  // user = this.auth.user;

  constructor(private router:Router) {}

  async logout() {
    // this.auth.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    // this.sub = this.auth.state.subscribe(() => (this.user = this.auth.user));
  }

  searchInput(value:string) {
    const role = 'CMS';
    const searchRoute = role === 'CMS' ? 'search' : 'myconnections';
    this.router.navigateByUrl(`/${searchRoute}/profile?q=${value}`);
  }
}
