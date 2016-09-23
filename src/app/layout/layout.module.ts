import 'jquery-slimscroll';

import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ROUTES }       from './layout.routes';
import { HomeModule } from '../home/home.module';

import { Layout } from './layout.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Navbar } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, HomeModule, TooltipModule, ROUTES],
  declarations: [Layout, Sidebar, Navbar]
})
export default class LayoutModule {
}
