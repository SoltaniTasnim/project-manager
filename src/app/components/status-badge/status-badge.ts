import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [NgClass],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
})
export class StatusBadge {
  @Input() prefix = '';
  @Input() status = '';

  get badgeClasses(): string {
    switch (this.status) {
      case 'En attente':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'En cours':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'Terminé':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  get dotClasses(): string {
    switch (this.status) {
      case 'En attente':
        return 'bg-yellow-500';
      case 'En cours':
        return 'bg-blue-500';
      case 'Terminé':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  }
}
