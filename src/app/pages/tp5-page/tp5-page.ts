import { Component } from '@angular/core';
import { AccountForm } from '../../components/account-form/account-form';
import { ContactForm } from '../../components/contact-form/contact-form';
import { DynamicEmailsForm } from '../../components/dynamic-emails-form/dynamic-emails-form';
import { FormBuilderUser } from '../../components/form-builder-user/form-builder-user';
import { MultiAddressesForm } from '../../components/multi-addresses-form/multi-addresses-form';
import { NestedAddressForm } from '../../components/nested-address-form/nested-address-form';
import { SkillsForm } from '../../components/skills-form/skills-form';
import { ValidationLab } from '../../components/validation-lab/validation-lab';

@Component({
  selector: 'app-tp5-page',
  imports: [
    ContactForm,
    AccountForm,
    FormBuilderUser,
    DynamicEmailsForm,
    SkillsForm,
    NestedAddressForm,
    MultiAddressesForm,
    ValidationLab,
  ],
  templateUrl: './tp5-page.html',
})
export class Tp5Page {}
