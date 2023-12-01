import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [VendorModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
