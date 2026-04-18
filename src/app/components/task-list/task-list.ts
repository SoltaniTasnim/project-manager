import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskPriority, TaskStatus } from '../../models/project.model';
import { HighlightStatusDirective } from '../directives/highlight-status.directive';
import { PriorityColorPipe } from '../pipes/priority-color-pipe';
import { StatusEmojiPipe } from '../pipes/status-emoji-pipe';
import { StatusBadge } from '../status-badge/status-badge';

type PriorityFilter = 'Toutes' | TaskPriority;

@Component({
  selector: 'app-task-list',
  imports: [
    FormsModule,
    HighlightStatusDirective,
    PriorityColorPipe,
    NgClass,
    StatusBadge,
    StatusEmojiPipe,
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() statusChanged = new EventEmitter<Task>();

  readonly statuses: TaskStatus[] = ['En attente', 'En cours', 'Terminé'];
  readonly priorities: PriorityFilter[] = ['Toutes', 'Haute', 'Moyenne', 'Basse'];

  selectedPriority: PriorityFilter = 'Toutes';

  get filteredTasks(): Task[] {
    if (this.selectedPriority === 'Toutes') {
      return this.tasks;
    }

    return this.tasks.filter((task) => task.priority === this.selectedPriority);
  }

  changeStatus(task: Task) {
    const currentIndex = this.statuses.indexOf(task.status);
    task.status = this.statuses[(currentIndex + 1) % this.statuses.length];
    this.markStatusChanged(task);
  }

  markStatusChanged(task: Task) {
    this.statusChanged.emit(task);
  }
}
