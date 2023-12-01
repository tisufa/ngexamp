import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [VendorModule, NgbDropdownModule],
  declarations: [DropdownComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
