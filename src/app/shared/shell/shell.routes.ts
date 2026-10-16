import type { Routes } from '@angular/router';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./../../features/cars/cars').then((component) => component.Cars),
      }
    ],
    loadComponent: () => import('./shell').then((component) => component.Shell),
  }
];
