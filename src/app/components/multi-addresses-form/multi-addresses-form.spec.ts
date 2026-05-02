import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiAddressesForm } from './multi-addresses-form';

describe('MultiAddressesForm', () => {
  let component: MultiAddressesForm;
  let fixture: ComponentFixture<MultiAddressesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiAddressesForm],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiAddressesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should require at least one address', () => {
    component.removeAddress(0);
    expect(component.addressesForm.errors?.['addressesRequired']).toBe(true);
  });
});
