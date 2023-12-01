import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

export const employeeRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./modules/add/add.module').then((m) => m.AddModule),
    data: {
      moduleCode: 'module.admin.module.employee.module.add',
      icon: '',
    },
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./modules/detail/detail.module').then((m) => m.DetailModule),
    data: {
      moduleCode: 'module.admin.module.employee.module.detail',
      icon: '',
    },
  },
];
