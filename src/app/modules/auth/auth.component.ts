import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './auth.component.html',
})
export class AuthComponent extends BaseModule {
  constructor() {
    super('module.auth');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
