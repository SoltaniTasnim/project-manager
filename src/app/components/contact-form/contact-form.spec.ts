import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  let component: ContactForm;
  let fixture: ComponentFixture<ContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize all Part 1 controls', () => {
    expect(component.nom).toBeTruthy();
    expect(component.prenom).toBeTruthy();
    expect(component.email).toBeTruthy();
    expect(component.telephone).toBeTruthy();
    expect(component.message).toBeTruthy();
  });

  it('should keep the form invalid when required fields are empty', () => {
    component.contactForm.markAllAsTouched();

    expect(component.contactForm.invalid).toBe(true);
    expect(component.nom?.errors?.['required']).toBe(true);
    expect(component.email?.errors?.['required']).toBe(true);
    expect(component.message?.errors?.['required']).toBe(true);
  });

  it('should validate email format and phone pattern', () => {
    component.email?.setValue('bad-email');
    component.telephone?.setValue('123');
    component.email?.markAsTouched();
    component.telephone?.markAsTouched();

    expect(component.email?.errors?.['email']).toBe(true);
    expect(component.telephone?.errors?.['pattern']).toBeTruthy();
  });

  it('should accept a valid Part 1 form', () => {
    component.contactForm.setValue({
      nom: 'Ali',
      prenom: 'Salah',
      email: 'ali@example.com',
      telephone: '12345678',
      message: 'Bonjour, ceci est un message valide.',
    });

    expect(component.contactForm.valid).toBe(true);
  });
});
