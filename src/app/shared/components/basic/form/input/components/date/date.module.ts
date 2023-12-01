import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputDateComponent } from './date.component';

@NgModule({
  imports: [VendorModule],
  declarations: [InputDateComponent],
  exports: [InputDateComponent],
})
export class InputDateModule {}
