import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minCompetencesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const skills = control.get('skills') as FormArray | null;
    if (!skills) {
      return null;
    }

    if (skills.length > 0 && skills.length < 3) {
      return { minCompetences: true };
    }

    return null;
  };
}

export function addressesRequiredValidator(arrayControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const addresses = control.get(arrayControlName) as FormArray | null;
    if (!addresses) {
      return null;
    }

    return addresses.length === 0 ? { addressesRequired: true } : null;
  };
}
