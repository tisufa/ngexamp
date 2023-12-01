import { Validators as AngularValidators } from '@angular/forms';
import { alphaNumericValidator } from './sync/alphaNumeric.validator';
import { emailValidator } from './sync/email.validator';
import { maxLengthValidator } from './sync/max-length.validator';
import { minLengthValidator } from './sync/min-length.validator';
import { patternValidator } from './sync/pattern.validator';
import { requiredValidator } from './sync/required.validator';

export const Validators = {
  compose: AngularValidators.compose,
  composeAsync: AngularValidators.composeAsync,
  // start: custom
  alphaNumeric: alphaNumericValidator,
  email: emailValidator,
  maxLength: maxLengthValidator,
  minLength: minLengthValidator,
  pattern: patternValidator,
  required: requiredValidator,
};
