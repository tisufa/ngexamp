import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { VendorModule } from 'src/app/shared/vendor/vendor.module';
import { InputCurrencyComponent } from './currency.component';
import { ResolveCurrencyPipe } from './resolve-currency.pipe';

@NgModule({
  imports: [VendorModule],
  declarations: [InputCurrencyComponent, ResolveCurrencyPipe],
  providers: [CurrencyPipe],
  exports: [InputCurrencyComponent],
})
export class InputCurrencyModule {}
