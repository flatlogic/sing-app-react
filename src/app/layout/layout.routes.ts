import { Routes, RouterModule }  from '@angular/router';
import { Home } from '../home/home.component';
import { Layout } from "./layout.component";
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Home }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
