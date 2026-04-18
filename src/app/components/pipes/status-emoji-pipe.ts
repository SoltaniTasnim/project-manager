import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../../models/project.model';

@Pipe({
  name: 'statusEmoji',
  standalone: true,
})
export class StatusEmojiPipe implements PipeTransform {
  transform(status: TaskStatus | string): string {
    switch (status) {
      case 'Terminé':
        return '✅';
      case 'En cours':
        return '🚧';
      case 'En attente':
        return '⏳';
      default:
        return '•';
    }
  }
}
