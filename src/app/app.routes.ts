import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'cataleg',
    pathMatch: 'full'
  },

  {
    path: 'cataleg',
    loadComponent: () =>
      import('./pages/cataleg-page/cataleg-page.component')
        .then(m => m.CatalegPageComponent)
  },

  {
    path: 'cerca',
    loadComponent: () =>
      import('./pages/cerca-page/cerca-page.component')
        .then(m => m.CercaPageComponent)
  },

  {
    path: 'detall/:id',
    loadComponent: () =>
      import('./pages/detall-page/detall-page.component')
        .then(m => m.DetallPageComponent)
  },

  {
    path: 'preferits',
    loadComponent: () =>
      import('./components/preferits-panel/preferits-panel.component')
        .then(m => m.PreferitsPanelComponent),
    canActivate: [authGuard]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: '**',
    redirectTo: 'cataleg'
  }
];