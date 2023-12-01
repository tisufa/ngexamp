import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
})
export class ButtonGroupComponent {
  @Input() position: 'CENTER' | 'RIGHT';
}
