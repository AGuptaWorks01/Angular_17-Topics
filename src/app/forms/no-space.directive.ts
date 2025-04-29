import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNoSpace]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NoSpaceDirective),
      multi: true
    }
  ]
})
export class NoSpaceDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value && typeof value === 'string') {
      const isOnlySpcaes = value.trim().length === 0;
      return isOnlySpcaes ? { noSpace: true } : null
    }
    return null;
  }
}
