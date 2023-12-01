import {
  Component,
  ContentChild,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { BaseValueAccessor, makeProvider } from 'src/app/core/base';
import { IObject } from 'src/app/core/interfaces';
import { ObjectHelper } from 'src/app/shared/helpers/object.helper';
import { OptionsModel } from 'src/app/shared/models/options.model';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [makeProvider(AutoCompleteComponent)],
})
export class AutoCompleteComponent
  extends BaseValueAccessor
  implements OnChanges
{
  @ContentChild('item') public itemTemplate: TemplateRef<any>;

  public model: OptionsModel;

  constructor(controlContainer: ControlContainer) {
    super('app.auto-complete', controlContainer);
  }

  protected override onInitBaseValueAccessor(): void {
    this.setStateInitialization();
    this.setStateReady();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.options && !changes.options.firstChange) {
      this.setStateInitialization();
    }
  }

  private setStateInitialization(): void {
    this.model = OptionsModel.create(this.options, this.optionViewField);
  }

  public handleInputSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const keywords = inputElement.value;
    this.model.search(keywords);
  }

  public handleClickItem(event: Event, item: IObject): void {
    event.preventDefault();
    let value = this.optionValueField
      ? new ObjectHelper(item).resolveValue(this.optionValueField)
      : item;
    this.formControl.patchValue(value);
    this.onChange.emit(value);
    if (this.formControl.dirty) return;
    this.formControl.markAsDirty();
  }
}
