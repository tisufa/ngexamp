import { NgModule } from '@angular/core';
import { InputAlphaNumericModule } from './components/alpha-numeric/alpha-numeric.module';
import { InputCurrencyModule } from './components/currency/currency.module';
import { InputDateModule } from './components/date/date.module';
import { InputDefaultModule } from './components/default/default.module';
import { InputEmailModule } from './components/email/email.module';
import { InputPasswordModule } from './components/password/password.module';

@NgModule({
  exports: [
    InputDefaultModule,
    InputPasswordModule,
    InputEmailModule,
    InputAlphaNumericModule,
    InputCurrencyModule,
    InputDateModule,
  ],
})
export class InputModule {}
