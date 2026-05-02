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
import { emailExistsValidator } from '../../validators/email-exists.validator';
import {
  matchPasswordValidator,
  passwordStrengthValidator,
} from '../../validators/custom-validators';

type AccountFormModel = {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
};

@Component({
  selector: 'app-account-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './account-form.html',
  styleUrl: './account-form.css',
})
export class AccountForm implements OnInit {
  accountForm!: FormGroup<AccountFormModel>;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.accountForm = this.fb.group(
      {
        email: this.fb.nonNullable.control('', {
          validators: [Validators.required, Validators.email],
          asyncValidators: [emailExistsValidator(this.userService)],
          updateOn: 'blur',
        }),
        password: this.fb.nonNullable.control('', {
          validators: [Validators.required, passwordStrengthValidator()],
        }),
        confirmPassword: this.fb.nonNullable.control('', {
          validators: [Validators.required],
        }),
      },
      {
        validators: [matchPasswordValidator('password', 'confirmPassword')],
      },
    );
  }

  get email() {
    return this.accountForm.get('email');
  }

  get password() {
    return this.accountForm.get('password');
  }

  get confirmPassword() {
    return this.accountForm.get('confirmPassword');
  }

  get passwordStrength() {
    return this.password?.errors?.['passwordStrength'];
  }

  onSubmit() {
    if (this.accountForm.invalid || this.email?.pending) {
      this.accountForm.markAllAsTouched();
      return;
    }
  }
}
