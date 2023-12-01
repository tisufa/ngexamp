import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { ButtonGroupComponent } from './button-group.component';

@NgModule({
  imports: [VendorModule],
  declarations: [ButtonGroupComponent],
  exports: [ButtonGroupComponent],
})
export class ButtonGroupModule {}
