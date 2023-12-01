import { Routes } from '@angular/router';
import { LeaveConfirmationGuard } from 'src/app/core/guard/leave-confirmation.guard';
import { AddComponent } from './add.component';

export const addRoutes: Routes = [
  {
    path: '',
    component: AddComponent,
    canDeactivate: [LeaveConfirmationGuard],
  },
];
