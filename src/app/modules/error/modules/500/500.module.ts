import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { InternalServerErrorComponent } from './500.component';
import { notFoundErrorRoutes } from './500.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(notFoundErrorRoutes)],
  declarations: [InternalServerErrorComponent],
})
export class InternalServerErrorModule {}
