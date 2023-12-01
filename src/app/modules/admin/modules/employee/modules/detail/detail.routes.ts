import { Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

export const detailRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/employee',
  },
  {
    path: ':id',
    component: DetailComponent,
  },
];
