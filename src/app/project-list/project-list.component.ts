import { Component, inject, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../projects.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent implements OnInit {
  constructor() {}
  projectsService: ProjectsService = inject(ProjectsService);
  projects: Project[] = [];
  ngOnInit(): void {
    this.projectsService.getProjects()?.subscribe({
      next: (data) => {
        console.log(data);
        this.projects = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
