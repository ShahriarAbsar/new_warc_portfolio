import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import projectData from "../../core/db/project_data.json";
@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [HeaderComponent , CommonModule , RouterModule],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent {

  
  get projects() {
    return projectData.data;
  }

  

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  // projects = [
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo1.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo2.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo3.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo4.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo5.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo2.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo1.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo2.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo3.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo4.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo5.png'
  //   },
  //   {
  //     title: '(YELLOW SOMETHING)',
  //     description: 'Film Industry',
  //     imageUrl: '../../../assets/images/AllprojectsPage/demo1.png'
  //   }
  // ];

  

}

