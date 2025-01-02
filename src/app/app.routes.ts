import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/components/login/login.component";
import {authGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
