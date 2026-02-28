import { Pipe, PipeTransform } from '@angular/core';
type TaskPriority = 'Haute' | 'Moyenne' | 'Basse';

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityColorPipe implements PipeTransform {

  transform(priority: TaskPriority | string): string {

    if (priority === 'Haute') {
      return 'text-red-500';
    }
    if (priority === 'Moyenne') {
      return 'text-yellow-500';
    }

    if (priority === 'Basse') {
      return 'text-green-500';
    }

    return '';
  }
}
