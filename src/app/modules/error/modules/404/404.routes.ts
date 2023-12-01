import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from './404.component';

export const notFoundErrorRoutes: Routes = [
  {
    path: '',
    component: NotFoundErrorComponent,
  },
];
