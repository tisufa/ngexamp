import { NgModule } from '@angular/core';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { ResolveFieldData } from './resolve-field-data.pipe';

@NgModule({
  declarations: [ResolveFieldData, CustomCurrencyPipe],
  exports: [ResolveFieldData, CustomCurrencyPipe],
})
export class PipesModule {}
