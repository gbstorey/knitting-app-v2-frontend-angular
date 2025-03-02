import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
  {path: '', component: ProjectListComponent},
  {path: 'details/:id', component: ProjectDetailsComponent}
];
