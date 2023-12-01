import { NgModule } from '@angular/core';
import { AdvancedModule } from './advanced/advanced.module';
import { BasicModule } from './basic/basic.module';

@NgModule({
  exports: [BasicModule, AdvancedModule],
})
export class ComponentsModule {}
