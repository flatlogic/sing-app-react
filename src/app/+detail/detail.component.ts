import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  template: `
    <h1>Hello from Detail</h1>
    <router-outlet></router-outlet>
  `,
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './detail.style.scss' ],
})
export class Detail {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
