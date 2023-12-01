import {
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Output,
  Provider,
  Type,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { BaseComponent } from './base-component';

export function makeProvider(component: Type<any>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
  };
}

@Component({
  template: '',
})
export abstract class BaseValueAccessor
  extends BaseComponent
  implements ControlValueAccessor, OnInit
{
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() formControl: FormControl;
  @Input() maxLength: number;
  @Input() isSkipValidation: boolean;
  // form options
  @Input() options: Array<any>;
  @Input() optionViewField: string;
  @Input() optionValueField: string;
  @Input() optionCompareField: string;

  @Output() onChange: EventEmitter<any>;
  @Output() onBlur: EventEmitter<any>;
  @Output() onInput: EventEmitter<any>;

  private _value: any;
  private _isDisabled: boolean;
  private _onBaseChange: () => void;
  private _onBaseTouched: () => void;

  protected abstract onInitBaseValueAccessor(): void;

  constructor(
    @Inject(String) moduleCode: string,
    private _controlContainer: ControlContainer
  ) {
    super(moduleCode);
    this.onChange = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onInput = new EventEmitter();
  }

  protected onInit(): void {
    this.setBaseStateInitialization();
    this.onInitBaseValueAccessor();
  }

  private setBaseStateInitialization(): void {
    if (!this.formControlName) return;
    this.formGroup = this._controlContainer.control as FormGroup;
    this.formControl = this.formGroup.get(this.formControlName) as FormControl;
  }

  public get isValid(): boolean {
    return !!(this.formControl?.touched && this.formControl?.valid);
  }

  public get isInvalid(): boolean {
    return !!(this.formControl?.touched && this.formControl?.invalid);
  }

  public get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onBaseChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onBaseTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }
}
