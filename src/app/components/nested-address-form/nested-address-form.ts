import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-address-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './nested-address-form.html',
  styleUrl: './nested-address-form.css',
})
export class NestedAddressForm {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: this.fb.group({
        rue: ['', Validators.required],
        codePostal: ['', Validators.required],
        ville: ['', Validators.required],
        pays: ['', Validators.required],
      }),
    });
  }

  get adresse(): FormGroup {
    return this.profileForm.get('adresse') as FormGroup;
  }
}
