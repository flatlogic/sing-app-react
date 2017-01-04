import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error',
  styleUrls: [ './error.style.scss' ],
  templateUrl: './error.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'error-page app'
  },
})
export class ErrorComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  searchResult(): void {
    this.router.navigate(['/app', 'dashboard']);
  }
}
