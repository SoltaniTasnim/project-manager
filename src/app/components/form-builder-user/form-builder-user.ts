import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type UserFormModel = {
  nom: FormControl<string>;
  prenom: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number | null>;
  ville: FormControl<string>;
};

@Component({
  selector: 'app-form-builder-user',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-builder-user.html',
  styleUrl: './form-builder-user.css',
})
export class FormBuilderUser implements OnInit {
  userForm!: FormGroup<UserFormModel>;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      prenom: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      email: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.email],
      }),
      age: this.fb.control<number | null>(null, {
        validators: [Validators.required, Validators.min(18), Validators.max(100)],
      }),
      ville: this.fb.nonNullable.control('', {
        validators: [Validators.required],
      }),
    });
  }

  get nom() {
    return this.userForm.get('nom');
  }

  get prenom() {
    return this.userForm.get('prenom');
  }

  get email() {
    return this.userForm.get('email');
  }

  get age() {
    return this.userForm.get('age');
  }

  get ville() {
    return this.userForm.get('ville');
  }

  markFormGroupTouched(control: FormGroup | AbstractControl = this.userForm) {
    if (control instanceof FormGroup) {
      Object.values(control.controls).forEach((childControl) =>
        this.markFormGroupTouched(childControl),
      );
      return;
    }

    control.markAsTouched();
  }

  resetForm() {
    this.userForm.reset({
      nom: '',
      prenom: '',
      email: '',
      age: null,
      ville: '',
    });
    this.submitted = false;
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.markFormGroupTouched();
      this.submitted = false;
      return;
    }

    this.submitted = true;
  }
}
