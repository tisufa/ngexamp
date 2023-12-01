import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent extends BaseComponent {
  @Input() header: string;
  @Input() isShowCloseButton: boolean;

  @ContentChild('footer') footerTemplate: TemplateRef<any>;

  @Output() onClose: EventEmitter<void>;
  @Output() onChange: EventEmitter<boolean>;
  constructor(public ngbActiveModal: NgbActiveModal) {
    super('app.popup');
    this.onClose = new EventEmitter();
    this.onChange = new EventEmitter();
    this.isShowCloseButton = true;
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
