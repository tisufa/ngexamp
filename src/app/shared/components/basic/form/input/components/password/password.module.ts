import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputPasswordComponent } from './password.component';

@NgModule({
  imports: [VendorModule],
  declarations: [InputPasswordComponent],
  exports: [InputPasswordComponent],
})
export class InputPasswordModule {}
