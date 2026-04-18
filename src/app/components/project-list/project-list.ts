import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../models/project.model';
import { Dashboard } from '../dashboard/dashboard';
import { ProjectDetail } from '../project-detail/project-detail';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-project-list',
  imports: [FormsModule, Dashboard, ProjectDetail, StatusBadge],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projects: Project[] = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      status: 'En cours',
      createdAt: '2026-04-18',
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' },
      ],
      newTaskTitle: '',
      newTaskPriority: 'Moyenne',
      newTaskStatus: 'En attente',
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      status: 'Terminé',
      createdAt: '2026-04-17',
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }],
      newTaskTitle: '',
      newTaskPriority: 'Moyenne',
      newTaskStatus: 'En attente',
    },
    {
      name: 'Projet 3',
      description: 'Description 3',
      status: 'En attente',
      createdAt: '2026-04-15',
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En cours' },
        { title: 'Tâche 2', priority: 'Basse', status: 'En attente' },
      ],
      newTaskTitle: '',
      newTaskPriority: 'Moyenne',
      newTaskStatus: 'En attente',
    },
  ];

  search = '';
  selectedProjectName: string | null = null;

  get filteredProjects(): Project[] {
    const query = this.search.trim().toLowerCase();
    if (!query) {
      return this.projects;
    }

    return this.projects.filter((project) => project.name.toLowerCase().includes(query));
  }

  selectProject(project: Project) {
    this.selectedProjectName = this.selectedProjectName === project.name ? null : project.name;
  }

  getSelectedProject(): Project | null {
    if (!this.selectedProjectName) {
      return null;
    }

    return this.projects.find((project) => project.name === this.selectedProjectName) ?? null;
  }

  clearSearch() {
    this.search = '';
  }
}
