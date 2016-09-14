import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Login } from './login.component';

export const routes = [
  { path: '', component: Login, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class LoginModule {
  static routes = routes;
}
