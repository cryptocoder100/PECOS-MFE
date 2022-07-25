import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  path: string;
  text: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: Breadcrumb[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const updateCrumbs = () => {
      let child = this.activatedRoute;
      while (child.firstChild) {
        child = child.firstChild;
      }
      this.breadcrumbs = child?.snapshot?.data?.crumbs || [];
    };
    updateCrumbs();
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(updateCrumbs);
  }
}
