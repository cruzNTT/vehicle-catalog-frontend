import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: 'login', 
    loadComponent: () => import('./features/login/login').then((component) => component.Login)
  }, 

  { path: '', 
    loadChildren: () => import('./shared/shell/shell.routes').then((routes) => routes.SHELL_ROUTES)
  },
  
  { path: '**', 
    loadComponent: () => import('./features/not-found/not-found').then((component) => component.NotFound)
  },
];
