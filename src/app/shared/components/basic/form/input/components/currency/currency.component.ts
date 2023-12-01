import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=currency]',
  templateUrl: './currency.component.html',
  providers: [makeProvider(InputCurrencyComponent)],
})
export class InputCurrencyComponent extends BaseValueAccessor {
  constructor(
    controlContainer: ControlContainer,
    private _currencyPipe: CurrencyPipe
  ) {
    super('app.input.currency', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.replace(/\D/g, '');
    const currency = this._currencyPipe.transform(
      value,
      '',
      '',
      this.globalService.constant.CURRENCY_DIGITS_INFO
    );
    this.formControl.patchValue(value ? +value : null);
    inputElement.value = currency || '';
    if (this.formControl.dirty) return;
    this.formControl.markAsDirty();
  }
}
