import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type ContactFormModel = {
  nom: FormControl<string>;
  prenom: FormControl<string>;
  email: FormControl<string>;
  telephone: FormControl<string>;
  message: FormControl<string>;
};

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  contactForm!: FormGroup<ContactFormModel>;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nom: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)],
      }),
      prenom: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      telephone: new FormControl('', {
        nonNullable: true,
        validators: [Validators.pattern('^[0-9]{8}$')],
      }),
      message: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(10)],
      }),
    });
  }

  get nom() {
    return this.contactForm.get('nom');
  }

  get prenom() {
    return this.contactForm.get('prenom');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get telephone() {
    return this.contactForm.get('telephone');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
  }
}
