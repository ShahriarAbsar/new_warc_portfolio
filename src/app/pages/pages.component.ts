import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';
import { ProjectDetailsComponent } from "./project-details/project-details.component";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, ProjectDetailsComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
