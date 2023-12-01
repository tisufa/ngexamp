import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent extends BaseModule {
  constructor() {
    super('module.auth.module.sign-in');
  }

  protected override onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.username`
          ),
          Validators.minLength(
            3,
            `${this.moduleCode}.form.validation.minLength.username`
          ),
          Validators.maxLength(
            16,
            `${this.moduleCode}.form.validation.maxLength.username`
          ),
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required(
            `${this.moduleCode}.form.validation.required.password`
          ),
        ]),
      ],
    });
  }

  public handleSignIn(): void {
    this.validate();
    if (this.formGroup.valid) {
      const { username, password } = this.formGroup.value;
      const { DUMMY_USERNAME, DUMMY_PASSWORD } = this.globalService.constant;
      this.setStateProcessing();
      if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
        this.globalService.toast.showSuccess(
          `${this.moduleCode}.toast.success.signIn`
        );
        this.globalService.session.in('1');
        this.router.navigate(['/']);
      } else {
        this.globalService.toast.showError(
          `${this.moduleCode}.toast.error.signIn`
        );
        this.formGroup.get('username')?.setErrors({
          message: '',
        });
        this.formGroup.get('password')?.setErrors({
          message: '',
        });
      }
      this.setStateReady();
    }
  }
}
