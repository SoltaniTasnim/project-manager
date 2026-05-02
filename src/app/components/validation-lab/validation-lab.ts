import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ValidationService } from '../../services/validation.service';
import { emailExistsValidator } from '../../validators/email-exists.validator';
import { matchPasswordValidator, passwordStrengthValidator } from '../../validators/custom-validators';
import { ShowErrorDirective } from '../directives/show-error.directive';

type ValidationLabModel = {
  username: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number | null>;
  code: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
};

@Component({
  selector: 'app-validation-lab',
  imports: [ReactiveFormsModule, JsonPipe, ShowErrorDirective],
  templateUrl: './validation-lab.html',
  styleUrl: './validation-lab.css',
})
export class ValidationLab implements OnInit {
  validationForm!: FormGroup<ValidationLabModel>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public validationService: ValidationService,
  ) {}

  ngOnInit(): void {
    this.validationForm = this.fb.group(
      {
        username: this.fb.nonNullable.control('', {
          validators: [Validators.required, Validators.minLength(3), Validators.maxLength(12)],
        }),
        email: this.fb.nonNullable.control('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [emailExistsValidator(this.userService)],
          updateOn: 'blur',
        }),
        age: this.fb.control<number | null>(null, {
          validators: [Validators.required, Validators.min(18), Validators.max(60)],
        }),
        code: this.fb.nonNullable.control('', {
          validators: [Validators.required, Validators.pattern('^[0-9]{8}$')],
        }),
        password: this.fb.nonNullable.control('', {
          validators: [Validators.required, passwordStrengthValidator()],
        }),
        confirmPassword: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
      },
      { validators: [matchPasswordValidator('password', 'confirmPassword')] },
    );
  }

  get username() {
    return this.validationForm.get('username');
  }

  get email() {
    return this.validationForm.get('email');
  }

  get age() {
    return this.validationForm.get('age');
  }

  get code() {
    return this.validationForm.get('code');
  }

  get password() {
    return this.validationForm.get('password');
  }

  get confirmPassword() {
    return this.validationForm.get('confirmPassword');
  }

  submit() {
    this.validationForm.markAllAsTouched();

    if (this.validationForm.errors?.['mustMatch']) {
      this.confirmPassword?.setErrors({
        ...(this.confirmPassword.errors ?? {}),
        mustMatch: true,
      });
    }
  }
}
