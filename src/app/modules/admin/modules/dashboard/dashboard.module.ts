import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(dashboardRoutes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
