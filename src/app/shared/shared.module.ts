import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  exports: [VendorModule, ComponentsModule, PipesModule],
})
export class SharedModule {}
