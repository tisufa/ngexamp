import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputEmailComponent } from './email.component';

@NgModule({
  imports: [VendorModule],
  declarations: [InputEmailComponent],
  exports: [InputEmailComponent],
})
export class InputEmailModule {}
