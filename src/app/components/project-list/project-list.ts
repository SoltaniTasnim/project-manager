import { Component } from '@angular/core';
import {TaskList} from '../task-list/task-list';

@Component({
  selector: 'app-project-list',
  imports: [TaskList],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  projects = [
    {name: 'Projet 1', description: 'Description 1', status: 'En cours', tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'En attente' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {name: 'Projet 2',description: 'Description 2',status: 'Terminé',tasks: [
        { title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }
      ]
    }
  ];


}
