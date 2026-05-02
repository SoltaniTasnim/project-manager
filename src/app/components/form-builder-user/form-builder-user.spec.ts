import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilderUser } from './form-builder-user';

describe('FormBuilderUser', () => {
  let component: FormBuilderUser;
  let fixture: ComponentFixture<FormBuilderUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuilderUser],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuilderUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark controls as touched', () => {
    component.markFormGroupTouched();

    expect(component.nom?.touched).toBe(true);
    expect(component.email?.touched).toBe(true);
    expect(component.ville?.touched).toBe(true);
  });

  it('should reset the form values', () => {
    component.userForm.setValue({
      nom: 'Ali',
      prenom: 'Salah',
      email: 'ali@example.com',
      age: 22,
      ville: 'Sfax',
    });

    component.resetForm();

    expect(component.userForm.value).toEqual({
      nom: '',
      prenom: '',
      email: '',
      age: null,
      ville: '',
    });
  });
});
