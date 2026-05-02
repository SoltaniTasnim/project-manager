import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsForm } from './skills-form';

describe('SkillsForm', () => {
  let component: SkillsForm;
  let fixture: ComponentFixture<SkillsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set minCompetences error when fewer than 3 skills exist', () => {
    component.addSkill();
    component.addSkill();

    expect(component.skillsForm.errors?.['minCompetences']).toBe(true);
  });
});
