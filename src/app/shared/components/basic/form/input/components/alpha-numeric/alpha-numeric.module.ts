import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputAlphaNumericComponent } from './alpha-numeric.component';

@NgModule({
  imports: [VendorModule],
  declarations: [InputAlphaNumericComponent],
  exports: [InputAlphaNumericComponent],
})
export class InputAlphaNumericModule {}
