import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const requiredValidator = (message: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      typeof control.value === 'undefined' ||
      control.value === null ||
      (Array.isArray(control.value) && control.value.length === 0) ||
      (typeof control.value === 'string' && control.value.trim() === '')
    ) {
      return { message };
    }
    return null;
  };
};
