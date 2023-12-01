import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [VendorModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
