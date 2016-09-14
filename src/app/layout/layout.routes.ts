import { Routes, RouterModule }  from '@angular/router';
import { Home } from '../home/home.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home }
];

export const ROUTES = RouterModule.forChild(routes);
