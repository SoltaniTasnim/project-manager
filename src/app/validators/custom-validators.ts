import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '');
    if (!value) {
      return null;
    }

    const checks = {
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /[0-9]/.test(value),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      hasMinLength: value.length >= 8,
    };

    return Object.values(checks).every(Boolean)
      ? null
      : { passwordStrength: checks };
  };
}

export function matchPasswordValidator(
  passwordControlName: string,
  confirmPasswordControlName: string,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(passwordControlName)?.value;
    const confirmPassword = control.get(confirmPasswordControlName)?.value;

    if (!confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : { mustMatch: true };
  };
}
