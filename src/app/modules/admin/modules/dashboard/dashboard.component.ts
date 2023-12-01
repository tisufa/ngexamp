import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BaseModule {
  constructor() {
    super('module.admin.module.dashboard');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
