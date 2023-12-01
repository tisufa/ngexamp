import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [VendorModule],
  declarations: [PopupComponent],
  providers: [PopupService],
  exports: [PopupComponent],
})
export class PopupModule {}
