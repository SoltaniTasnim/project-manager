import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minCompetencesValidator } from '../../validators/array-validators';

@Component({
  selector: 'app-skills-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './skills-form.html',
  styleUrl: './skills-form.css',
})
export class SkillsForm {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group(
      {
        skills: this.fb.array([]),
      },
      { validators: [minCompetencesValidator()] },
    );
  }

  createSkillGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      level: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.createSkillGroup());
    this.skillsForm.updateValueAndValidity();
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
    this.skillsForm.updateValueAndValidity();
  }
}
