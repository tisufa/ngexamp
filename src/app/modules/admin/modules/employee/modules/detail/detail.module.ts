import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail.component';
import { detailRoutes } from './detail.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(detailRoutes)],
  declarations: [DetailComponent],
})
export class DetailModule {}
