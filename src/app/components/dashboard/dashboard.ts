import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  @Input() projects: Project[] = [];

  get totalProjects(): number {
    return this.projects.length;
  }

  get totalTasks(): number {
    return this.projects.reduce((count, project) => count + project.tasks.length, 0);
  }

  get completedTasks(): number {
    return this.projects.reduce(
      (count, project) =>
        count + project.tasks.filter((task) => task.status === 'Terminé').length,
      0,
    );
  }

  get globalProgress(): number {
    if (this.totalTasks === 0) {
      return 0;
    }

    return Math.round((this.completedTasks / this.totalTasks) * 100);
  }

  get ringStyle(): string {
    return `conic-gradient(#2563eb 0% ${this.globalProgress}%, #dbeafe ${this.globalProgress}% 100%)`;
  }
}
