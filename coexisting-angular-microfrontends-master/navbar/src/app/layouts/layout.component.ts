import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: {
    class: 'app-layout',
  },
})
export class LayoutComponent {
  blankPageInd = false;

  public location = '';

  constructor(private router: Router) {
    this.location = router.url;
    if (
      this.location?.includes('/disposition/correspondence/letter') ||
      this.location?.includes('/disposition/view/letter/') ||
      this.location?.includes('/rfi/correspondence/letter') ||
      this.location?.includes('/rfi/view/letter/')
    ) {
      this.blankPageInd = true;
    }
  }
}
