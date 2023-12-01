import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    data: {
      moduleCode: 'module.admin',
      icon: '',
    },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    data: {
      moduleCode: 'module.auth',
      icon: '',
    },
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
    data: {
      moduleCode: 'module.error',
      icon: '',
    },
  },
  {
    path: '**',
    redirectTo: '/error/404',
  },
];
