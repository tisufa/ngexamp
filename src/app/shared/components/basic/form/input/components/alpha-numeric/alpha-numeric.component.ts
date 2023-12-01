import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=alphaNumeric]',
  templateUrl: './alpha-numeric.component.html',
  providers: [makeProvider(InputAlphaNumericComponent)],
})
export class InputAlphaNumericComponent extends BaseValueAccessor {
  @Input() format: 'UPPERCASE' | 'LOWERCASE';
  constructor(controlContainer: ControlContainer) {
    super('app.input.alpha-numeric', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value.replace(/\W/g, '');

    if (this.format) {
      value =
        this.format === 'UPPERCASE' ? value.toUpperCase() : value.toLowerCase();
    }

    this.formControl.patchValue(value || null);
    inputElement.value = value || '';
    if (this.formControl.dirty) return;
    this.formControl.markAsDirty();
  }
}
