import { Component } from '@angular/core';
import { ProjectList } from '../../components/project-list/project-list';

@Component({
  selector: 'app-project-manager-page',
  imports: [ProjectList],
  templateUrl: './project-manager-page.html',
})
export class ProjectManagerPage {}
