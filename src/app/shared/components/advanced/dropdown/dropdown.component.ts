import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent extends BaseComponent {
  @Input() placement:
    | 'bottom-start'
    | 'bottom-end'
    | 'top-start'
    | 'top-end'
    | 'auto';
  @Input() disabled: boolean;

  @Output() openChange: EventEmitter<boolean>;

  @ContentChild('dropDown') dropdownTemplate: TemplateRef<any>;
  @ViewChild(NgbDropdown) ngbDropDown: NgbDropdown;

  constructor() {
    super('app.dropdown');
    this.placement = 'bottom-start';
    this.openChange = new EventEmitter();
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
