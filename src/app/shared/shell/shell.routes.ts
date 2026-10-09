import type { Routes } from '@angular/router';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./shell').then((component) => component.Shell),
  },
  {
    path: 'cars',
    loadComponent: () => import('./../../features/cars/cars').then((component) => component.Cars),
  },
];
