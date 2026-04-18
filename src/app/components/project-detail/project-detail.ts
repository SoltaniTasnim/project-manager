import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, Task } from '../../models/project.model';
import { FriendlyDatePipe } from '../pipes/friendly-date-pipe';
import { StatusBadge } from '../status-badge/status-badge';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-detail',
  imports: [FormsModule, FriendlyDatePipe, StatusBadge, TaskList],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  @Input() project: Project | null = null;

  readonly statuses = ['En attente', 'En cours', 'Terminé'] as const;
  readonly priorities = ['Haute', 'Moyenne', 'Basse'] as const;

  message = '';
  messageVisible = false;

  showMessage(text: string) {
    this.message = text;
    this.messageVisible = true;

    const element = document.getElementById('task-message');
    if (element) {
      element.style.display = 'flex';
      element.style.opacity = '1';

      setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.display = 'none';
          this.messageVisible = false;
        }, 500);
      }, 3000);
    }
  }

  closeMessage() {
    const element = document.getElementById('task-message');
    if (element) {
      element.style.display = 'none';
    }

    this.messageVisible = false;
  }

  getProgress(): number {
    if (!this.project || this.project.tasks.length === 0) {
      return 0;
    }

    const done = this.project.tasks.filter((task) => task.status === 'Terminé').length;
    return Math.round((done / this.project.tasks.length) * 100);
  }

  onStatusChanged(task: Task) {
    if (!this.project) {
      return;
    }

    this.project.tasks = [...this.project.tasks];
    this.message = `Statut changé : ${task.status}`;
    setTimeout(() => this.showMessage(this.message), 200);
  }

  addTask() {
    if (!this.project) {
      return;
    }

    const title = (this.project.newTaskTitle ?? '').trim();
    if (!title) {
      return;
    }

    const newTask: Task = {
      title,
      priority: this.project.newTaskPriority ?? 'Moyenne',
      status: this.project.newTaskStatus ?? 'En attente',
      isNew: true,
    };

    this.project.tasks = [...this.project.tasks, newTask];

    setTimeout(() => {
      newTask.isNew = false;
    }, 400);

    this.project.newTaskTitle = '';
    this.project.newTaskPriority = 'Moyenne';
    this.project.newTaskStatus = 'En attente';

    this.message = 'Tâche ajoutée avec succès';
    setTimeout(() => this.showMessage(this.message), 200);
  }

  close() {
    this.project = null;
  }
}
