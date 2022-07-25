import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';

// import { AuthenticationService, DataService } from '@core/services';
import { assetUrl } from 'src/single-spa/asset-url';

export const allLinks = [
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-home.svg`),
    icon: 'home',
    link: '/dashboard',
    text: 'Home',
  },
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-work-queue.svg`),
    icon: 'work-queue',
    link: '/app1',
    role: [Role.CMS],
    text: 'Work Queue',
  },
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-reports.svg`),
    icon: 'reports',
    link: '/app2',
    role: [Role.CMS],
    text: 'Reports',
  },
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-search.svg`),
    icon: 'search',
    link: '/psearch',
    role: [Role.CMS],
    text: 'Search',
  },
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-my-connections.svg`),
    icon: 'my-connections',
    link: '/myconnections',
    role: [Role.Provider],
    text: 'My Connections',
  },
  {
    iconUrl:  assetUrl(`icons/page-framework/icon-help.svg`),
    icon: 'help',
    link: '',
    text: 'Knowledge Base',
  },
];

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent implements OnInit {
  navCollapsed = true;
  navbarExpandedIconUrl = assetUrl(`icons/page-framework/icon-expand.svg`);
  navbarCollapsedIconUrl = assetUrl(`icons/page-framework/icon-collapse.svg`);
  links: any[] = [];
  user: User = {
    id: 1,
    username: 'John100',
    password: 'pass',
    firstName: 'John',
    lastName: 'Doe',
    role: Role.Provider,
    token: ''
  };

  constructor() {
    // this.user = this.auth.userValue;
    this.user.role = Role.CMS;
  }

  ngOnInit() {
    this.links = allLinks
                  .filter((link) => !link.role || link.role.includes(this.user.role));
  }
}
