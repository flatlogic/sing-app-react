import { Routes } from '@angular/router';
import { Home } from './home';
import { Layout } from './layout/layout.component';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full'
  }, {
    path: 'login', loadChildren: () => System.import('./login/login.module')
  }, {
    path: 'error', component: ErrorComponent
  }, {
    path: 'app',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Home },
    ]
  }, {
    path: '**',    component: ErrorComponent
  }
];
