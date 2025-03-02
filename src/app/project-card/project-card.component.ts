import { Component, input } from '@angular/core';
import { blankProject } from '../types/project';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input(blankProject)
}
