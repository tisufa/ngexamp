import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { FormGroupComponent } from './form-group.component';

@NgModule({
  imports: [VendorModule],
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent],
})
export class FormGroupModule {}
