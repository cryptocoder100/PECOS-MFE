import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'skip-nav',
  templateUrl: './skip-nav.component.html',
})
export class SkipNavComponent {
  @Input() to: string = '#main';

  constructor(private el: ElementRef) {}

  onClick(e) {
    e.preventDefault();
    let el = this.el.nativeElement;
    let to = el.ownerDocument.querySelector(this.to);
    if (to) to.focus();
  }
}
