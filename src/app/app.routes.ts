import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { LandingpageComponent } from './pages/home/landingpage/landingpage.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=>import('./pages/pages.component').then((c)=>c.PagesComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/home/home.component').then(
                (c) => c.HomeComponent
              ),
          },
          {
            path: 'about',
            loadComponent: () =>
              import('./pages/team-page/team-page.component').then(
                (c) => c.TeamPageComponent
              ),
          },
          {
            path: 'works',
            loadComponent: () =>
              import('./pages/all-projects/all-projects.component').then(
                (c) => c.AllProjectsComponent
              ),
          },
          {
            path: 'works/:idx',
            loadComponent: () =>
              import('./pages/project-details/project-details.component').then(
                (c) => c.ProjectDetailsComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./pages/home/home.component').then(
                (c) => c.HomeComponent
              ),
          },
          {
            path: '**',
            redirectTo: '',
          },
        ],
    }
];
