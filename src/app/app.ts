import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProjectList} from './components/project-list/project-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProjectList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-manager');
}
