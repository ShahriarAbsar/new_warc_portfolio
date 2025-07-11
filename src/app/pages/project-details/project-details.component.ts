import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";

import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import projectData from "../../core/db/project_data.json";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterLink],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

  get projects() {
    return projectData.data;
  }

project:any=null;
nextProject:any=null;
 nextIdx=-1;
 prevIdx=-1;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      let selectedIdx = Number( params['idx']);
      this.prevIdx = selectedIdx -1;
      this.nextIdx = selectedIdx +1;

      if(this.prevIdx<0) this.prevIdx = this.projects.length-1;
      if(this.nextIdx>=this.projects.length ) this.nextIdx = 0;

      this.project=this.projects[selectedIdx];
      this.nextProject=this.projects[this.nextIdx];
    })
  }
}
