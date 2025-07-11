import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { ObserverService } from '../../services/observer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
@ViewChild('swiper') myswiper:ElementRef|undefined

footerShow =false;

constructor(private observerService:ObserverService){

}

ngAfterViewInit(){
  if(this.myswiper && typeof(document)!=='undefined'){
    this.myswiper.nativeElement.initialize();
  }

  this.observerService.footerObserver.subscribe((value)=>{
    this.footerShow= value as boolean;
  });
}

isHovered = -1;

items = ['Home', 'About', 'Work', 'Contact'];
paths = ['/home', '/about', '/works', 'contactSection'];
activeIndex: number | null = null;

setActive(index: number): void {
  this.activeIndex = index;
}
}
