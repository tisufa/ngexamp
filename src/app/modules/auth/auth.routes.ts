import { Routes } from '@angular/router';
import { ensureNotAuthenticated } from 'src/app/core/guard/ensure-not-authenticated.guard';
import { AuthComponent } from './auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivateChild: [ensureNotAuthenticated],
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./modules/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
        data: {
          moduleCode: 'module.auth.module.sign-in',
          icon: '',
        },
      },
    ],
  },
];
