import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddComponent } from './add.component';
import { addRoutes } from './add.routes';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(addRoutes)],
  declarations: [AddComponent],
})
export class AddModule {}
