import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [FormsModule, TaskList],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  @Input() project: any;

  readonly statuses = ['En attente', 'En cours', 'Terminé'] as const;
  readonly priorities = ['Haute', 'Moyenne', 'Basse'] as const;

  getProgress(): number {
    if (!this.project || this.project.tasks.length === 0) return 0;
    const done = this.project.tasks.filter((t: any) => t.status === 'Terminé').length;
    return Math.round((done / this.project.tasks.length) * 100);
  }

  addTask() {
    if (!this.project) return;

    const title = (this.project.newTaskTitle ?? '').trim();
    if (!title) return;

    this.project.tasks = [
      ...this.project.tasks,
      {
        title,
        priority: this.project.newTaskPriority ?? 'Moyenne',
        status: this.project.newTaskStatus ?? 'En attente',
      },
    ];

    this.project.newTaskTitle = '';
    this.project.newTaskPriority = 'Moyenne';
    this.project.newTaskStatus = 'En attente';
  }

  close() {
    this.project = null;
  }
}
