import { Component, Optional } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';
import { IObject } from 'src/app/core/interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [makeProvider(SelectComponent)],
})
export class SelectComponent extends BaseValueAccessor {
  constructor(@Optional() controlContainer: ControlContainer) {
    super('app.select', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleChange(): void {
    this.onChange.emit(this.formControl.value);
  }

  public compareFn(option1: IObject, option2: IObject): boolean {
    return option1 && option2
      ? (this.optionValueField ? option1 : option1.secureId) ===
          (this.optionValueField ? option2 : option2.secureId)
      : JSON.stringify(option1) === JSON.stringify(option2);
  }
}
