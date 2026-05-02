import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NestedAddressForm } from './nested-address-form';

describe('NestedAddressForm', () => {
  let component: NestedAddressForm;
  let fixture: ComponentFixture<NestedAddressForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedAddressForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedAddressForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should expose nested address group', () => {
    expect(component.adresse).toBeTruthy();
  });
});
