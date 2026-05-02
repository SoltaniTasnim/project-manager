import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicEmailsForm } from './dynamic-emails-form';

describe('DynamicEmailsForm', () => {
  let component: DynamicEmailsForm;
  let fixture: ComponentFixture<DynamicEmailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicEmailsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicEmailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add and remove email groups', () => {
    expect(component.emails.length).toBe(1);
    component.addEmail();
    expect(component.emails.length).toBe(2);
    component.removeEmail(1);
    expect(component.emails.length).toBe(1);
  });
});
