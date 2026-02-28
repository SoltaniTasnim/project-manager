import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectDetail } from '../project-detail/project-detail';
import {NgClass} from '@angular/common';

type TaskStatus = 'En attente' | 'En cours' | 'Terminé';
type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';

type Task = {
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
};

type Project = {
  name: string;
  description: string;
  status: string;
  tasks: Task[];

  // add form state (we keep it but it will be used inside ProjectDetail now)
  newTaskTitle?: string;
  newTaskPriority?: TaskPriority;
  newTaskStatus?: TaskStatus;
};

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [FormsModule, ProjectDetail, NgClass],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {

  projects: Project[] = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      status: 'En cours',
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
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }],
      newTaskTitle: '',
      newTaskPriority: 'Moyenne',
      newTaskStatus: 'En attente',
    },
  ];

  // project search (TP Partie 1 Q2 uses searchTerm naming, but you can keep search)
  search = '';

  get filteredProjects(): Project[] {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.projects;
    return this.projects.filter(p => p.name.toLowerCase().includes(q));
  }


  selectedProjectName: string | null = null;

  selectProject(project: Project) {
    this.selectedProjectName =
      this.selectedProjectName === project.name ? null : project.name;
  }

  getSelectedProject(): Project | null {
    if (!this.selectedProjectName) return null;
    return this.projects.find(p => p.name === this.selectedProjectName) ?? null;
  }
  clearSearch() {
    this.search = '';
  }
}
