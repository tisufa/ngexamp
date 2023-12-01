import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputDefaultComponent } from './default.component';

@NgModule({
  imports: [VendorModule],
  declarations: [InputDefaultComponent],
  exports: [InputDefaultComponent],
})
export class InputDefaultModule {}
