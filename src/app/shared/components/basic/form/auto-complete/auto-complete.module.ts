import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { DropdownModule } from '../../../advanced/dropdown/dropdown.module';
import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
  imports: [VendorModule, DropdownModule, PipesModule],
  declarations: [AutoCompleteComponent],
  exports: [AutoCompleteComponent],
})
export class AutoCompleteModule {}
