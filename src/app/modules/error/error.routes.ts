import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

export const errorRoutes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/',
      },
      {
        path: '404',
        loadChildren: () =>
          import('./modules/404/404.module').then((m) => m.NotFoundErrorModule),
        data: {
          moduleCode: 'module.error.module.404',
          icon: '',
        },
      },
      {
        path: '500',
        loadChildren: () =>
          import('./modules/500/500.module').then(
            (m) => m.InternalServerErrorModule
          ),
        data: {
          moduleCode: 'module.error.module.500',
          icon: '',
        },
      },
    ],
  },
];
