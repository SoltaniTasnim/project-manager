import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { FormsModule } from '@angular/forms';

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
  expanded?: boolean;

  // add form state
  newTaskTitle?: string;
  newTaskPriority?: TaskPriority;
  newTaskStatus?: TaskStatus;
};

@Component({
  selector: 'app-project-list',
  imports: [TaskList,FormsModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projects: Project[] = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      status: 'En cours',
      expanded: false,
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
      expanded: false,
      tasks: [{ title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }],
      newTaskTitle: '',
      newTaskPriority: 'Moyenne',
      newTaskStatus: 'En attente',
    },
  ];

  // Filters
  search = '';
  statusFilter: '' | TaskStatus = '';
  priorityFilter: '' | TaskPriority = '';

  readonly statuses: TaskStatus[] = ['En attente', 'En cours', 'Terminé'];
  readonly priorities: TaskPriority[] = ['Haute', 'Moyenne', 'Basse'];

  // Accordion
  toggleAccordion(project: Project) {
    for (const p of this.projects) {
      if (p !== project) p.expanded = false;
    }
    project.expanded = !project.expanded;
  }

  // Counters
  counts(project: Project) {
    const total = project.tasks.length;
    const enAttente = project.tasks.filter(t => t.status === 'En attente').length;
    const enCours = project.tasks.filter(t => t.status === 'En cours').length;
    const termine = project.tasks.filter(t => t.status === 'Terminé').length;
    return { total, enAttente, enCours, termine };
  }

  // Progress (% done)
  progress(project: Project) {
    const total = project.tasks.length;
    if (total === 0) return 0;
    const done = project.tasks.filter(t => t.status === 'Terminé').length;
    return Math.round((done / total) * 100);
  }

  // Filter tasks for a project
  filteredTasks(project: Project): Task[] {
    const q = this.search.trim().toLowerCase();
    return project.tasks.filter(t => {
      const matchesSearch = !q || t.title.toLowerCase().includes(q);
      const matchesStatus = !this.statusFilter || t.status === this.statusFilter;
      const matchesPriority = !this.priorityFilter || t.priority === this.priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }

  // Add task (inline)
  addTask(project: Project) {
    const title = (project.newTaskTitle ?? '').trim();
    if (!title) return;

    const newTask: Task = {
      title,
      priority: project.newTaskPriority ?? 'Moyenne',
      status: project.newTaskStatus ?? 'En attente',
    };

    project.tasks = [...project.tasks, newTask];

    // reset input
    project.newTaskTitle = '';
    project.newTaskPriority = 'Moyenne';
    project.newTaskStatus = 'En attente';
  }

  // Optional: quick clear filters
  clearFilters() {
    this.search = '';
    this.statusFilter = '';
    this.priorityFilter = '';
  }
}
