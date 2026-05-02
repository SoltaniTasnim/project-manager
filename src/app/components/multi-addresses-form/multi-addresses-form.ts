import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { addressesRequiredValidator } from '../../validators/array-validators';

@Component({
  selector: 'app-multi-addresses-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './multi-addresses-form.html',
  styleUrl: './multi-addresses-form.css',
})
export class MultiAddressesForm {
  addressesForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressesForm = this.fb.group(
      {
        addresses: this.fb.array([this.createAddressGroup()]),
      },
      { validators: [addressesRequiredValidator('addresses')] },
    );
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      type: ['domicile', Validators.required],
      rue: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
    });
  }

  get addresses(): FormArray {
    return this.addressesForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddressGroup());
    this.addressesForm.updateValueAndValidity();
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
    this.addressesForm.updateValueAndValidity();
  }
}
