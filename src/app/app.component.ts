import { Component, computed, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './types/project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'knitting-app-v2-frontend-angular';
  isMenuOpen = signal(false)
  projectsResource = resource({
    loader: async (): Promise<Project[]> => {
      const response = await fetch("http://localhost:3000/projects");
      const data = await response.json()
      return data
    }
  })
  projects = computed(() => this.projectsResource.value());


  toggleMenu() {
    this.isMenuOpen.update((value) => !value)
  }
}
