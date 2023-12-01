import { Routes } from '@angular/router';
import { InternalServerErrorComponent } from './500.component';

export const notFoundErrorRoutes: Routes = [
  {
    path: '',
    component: InternalServerErrorComponent,
  },
];
