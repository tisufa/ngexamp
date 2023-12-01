import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import { AuthLayoutModule } from './layout/layout.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(authRoutes), AuthLayoutModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
