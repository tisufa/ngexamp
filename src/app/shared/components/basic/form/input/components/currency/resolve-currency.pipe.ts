import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from 'src/app/core/global/global.service';

@Pipe({
  name: 'resolveCurrency',
})
export class ResolveCurrencyPipe implements PipeTransform {
  constructor(
    private _currencyPipe: CurrencyPipe,
    private _globalService: GlobalService
  ) {}
  transform(value: any): string {
    if (!value) return '';
    const valueNumber = String(value || '').replace(/\D/g, '');
    return (
      this._currencyPipe.transform(
        valueNumber,
        '',
        '',
        this._globalService.constant.CURRENCY_DIGITS_INFO
      ) || ''
    );
  }
}
