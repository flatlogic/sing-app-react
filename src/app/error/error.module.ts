import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component.ts';

export const routes = [
  { path: '', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ErrorModule {
  static routes = routes;
}
