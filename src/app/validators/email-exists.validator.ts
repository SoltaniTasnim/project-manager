import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

export function emailExistsValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = String(control.value ?? '').trim();

    if (!email || control.hasError('required') || control.hasError('email')) {
      return of(null);
    }

    return userService.checkEmailExists(email).pipe(
      map((exists) => (exists ? { emailExists: true } : null)),
    );
  };
}
