import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './404.component.html',
})
export class NotFoundErrorComponent extends BaseModule {
  constructor() {
    super('module.error.module.404');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
