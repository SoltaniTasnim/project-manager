import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate',
  standalone: true,
})
export class FriendlyDatePipe implements PipeTransform {
  transform(value: string | Date | null | undefined): string {
    if (!value) {
      return '';
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return '';
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffInDays = Math.round((today.getTime() - target.getTime()) / 86400000);

    if (diffInDays === 0) {
      return "Aujourd'hui";
    }

    if (diffInDays === 1) {
      return 'Hier';
    }

    if (diffInDays > 1) {
      return `Il y a ${diffInDays} jours`;
    }

    if (diffInDays === -1) {
      return 'Demain';
    }

    return `Dans ${Math.abs(diffInDays)} jours`;
  }
}
