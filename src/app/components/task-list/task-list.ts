import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TaskStatus = 'En attente' | 'En cours' | 'Terminé';
type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';

type Task = {
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
};

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];

  readonly statuses: TaskStatus[] = ['En attente', 'En cours', 'Terminé'];
}
