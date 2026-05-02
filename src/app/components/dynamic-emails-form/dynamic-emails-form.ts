import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-emails-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './dynamic-emails-form.html',
  styleUrl: './dynamic-emails-form.css',
})
export class DynamicEmailsForm {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emails: this.fb.array([this.createEmailControl()]),
    });
  }

  createEmailControl(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      type: ['personnel', Validators.required],
    });
  }

  get emails(): FormArray {
    return this.emailForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(this.createEmailControl());
  }

  removeEmail(index: number) {
    if (this.emails.length > 1) {
      this.emails.removeAt(index);
    }
  }
}
