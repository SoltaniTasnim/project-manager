import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationLab } from './validation-lab';

describe('ValidationLab', () => {
  let component: ValidationLab;
  let fixture: ComponentFixture<ValidationLab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationLab],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationLab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
