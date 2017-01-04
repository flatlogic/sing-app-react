import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
   path: '', redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: 'app',   loadChildren: './layout/layout.module#LayoutModule'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '**',    component: ErrorComponent
  }
];
