import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';
import { AdminLayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(adminRoutes),
    AdminLayoutModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
