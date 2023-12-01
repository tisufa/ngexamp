import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends BaseComponent {
  @Input() header: string;
  constructor() {
    super('app.card');
  }

  protected override onInit(): void {
    this.setStateReady;
  }
}
