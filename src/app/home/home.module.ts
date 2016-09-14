import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { XLarge } from './x-large';

import { Home } from './home.component';

@NgModule({
  imports: [CommonModule, AlertModule, DatepickerModule],
  declarations: [ XLarge, Home]
})
export class HomeModule {
}
