import { computed, inject, Injectable } from '@angular/core';
import { Project } from './types/project';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  getProjects() {
    return this.http
      .get<Project[]>('http://localhost:3000/projects')
      .pipe(retry(3));
  }
  getProject(id: number) {
    return this.http
      .get<Project>('http://localhost:3000/projects/' + id)
      .pipe(retry(3));
  }
}
