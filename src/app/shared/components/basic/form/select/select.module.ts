import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [VendorModule, PipesModule],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectModule {}
