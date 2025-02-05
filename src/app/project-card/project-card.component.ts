import { Component, input } from '@angular/core';
import { blankProject } from '../types/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input(blankProject)
}
