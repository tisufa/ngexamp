import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundErrorComponent } from './404.component';
import { notFoundErrorRoutes } from './404.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(notFoundErrorRoutes)],
  declarations: [NotFoundErrorComponent],
})
export class NotFoundErrorModule {}
