import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { TextareaComponent } from './textarea.component';

@NgModule({
  imports: [VendorModule],
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
})
export class TextareaModule {}
