import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightStatusDirective } from '../directives/highlight-status.directive';
import {PriorityColorPipe} from '../pipes/priority-color-pipe';
import {NgClass} from '@angular/common';

type TaskStatus = 'En attente' | 'En cours' | 'Terminé';
type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';

type Task = {
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
};

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, HighlightStatusDirective, PriorityColorPipe, NgClass],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];

  readonly statuses: TaskStatus[] = ['En attente', 'En cours', 'Terminé'];
}
