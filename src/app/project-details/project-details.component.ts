import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { blankProject, Project } from '../types/project';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);
  project: Project = blankProject;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.projectsService.getProject(id).subscribe({
        next: (data) => {
          this.project = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
