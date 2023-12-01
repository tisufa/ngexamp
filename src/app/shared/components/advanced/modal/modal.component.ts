import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { VariantType } from 'src/app/core/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent extends BaseComponent {
  @Input() variant: VariantType;
  @Input() header: string;
  @Input() message: string;
  @Input() positiveButton: string;
  @Input() negativeButton: string;

  @Output() onChange: EventEmitter<boolean>;

  constructor() {
    super('app.modal');
    this.onChange = new EventEmitter();
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
