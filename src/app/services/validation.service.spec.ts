import { FormControl, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  it('should return an email error message', () => {
    const service = new ValidationService();
    const control = new FormControl('bad', [Validators.email]);
    control.markAsTouched();
    control.updateValueAndValidity();

    expect(service.getErrorMessage(control)).toContain('email');
    expect(service.hasError(control, 'email')).toBe(true);
  });
});
