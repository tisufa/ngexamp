import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=date]',
  templateUrl: './date.component.html',
  providers: [makeProvider(InputDateComponent)],
})
export class InputDateComponent extends BaseValueAccessor {
  @Input() minDate: Date;
  @Input() maxDate: Date;
  constructor(controlContainer: ControlContainer) {
    super('app.input.date', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }
}
