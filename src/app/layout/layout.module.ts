import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ROUTES }       from './layout.routes';
import { HomeModule } from '../home/home.module';

import { Layout } from './layout.component';

@NgModule({
  imports: [CommonModule, HomeModule, ROUTES],
  declarations: [Layout]
})
export default class LayoutModule {
}
