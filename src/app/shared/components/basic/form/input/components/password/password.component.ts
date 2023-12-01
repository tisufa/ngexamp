import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';

@Component({
  selector: 'app-input[type=password]',
  templateUrl: './password.component.html',
  providers: [makeProvider(InputPasswordComponent)],
})
export class InputPasswordComponent extends BaseValueAccessor {
  public isShowPassword: boolean;
  constructor(controlContainer: ControlContainer) {
    super('app.input.password', controlContainer);
  }

  protected onInitBaseValueAccessor(): void {
    this.setStateReady();
  }

  public handleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  public handleOnChange(): void {
    this.onChange.emit(this.formControl.value);
  }
}
