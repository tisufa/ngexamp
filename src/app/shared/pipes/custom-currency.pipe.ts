import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from 'src/app/core/global/global.service';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor(
    private _globalService: GlobalService,
    private _currencyPipe: CurrencyPipe
  ) {}

  transform(value: any) {
    return this._currencyPipe.transform(
      value || 0,
      this._globalService.constant.CURRENCY_CODE,
      this._globalService.constant.CURRENCY_DISPLAY,
      this._globalService.constant.CURRENCY_DIGITS_INFO,
      this._globalService.constant.CURRENCY_LOCALE
    );
  }
}
