import { afterNextRender, AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { ObserverService } from '../../services/observer.service';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TeamPageComponent implements AfterViewInit {
  @ViewChild('workSwiper') workSwiper:ElementRef|undefined
  @ViewChild('TeamSwiper') TeamSwiper:ElementRef|undefined


 
  @ViewChildren('footer') sections: QueryList<ElementRef> | undefined;
  observerOptions = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // adjust this as necessary
};

constructor(private observerService:ObserverService){
  afterNextRender(() => {
    this.workSwiper?.nativeElement.initialize();
    this.TeamSwiper?.nativeElement.initialize();
});
}


ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  if (typeof document !== 'undefined') {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
       // console.log(entry)
        if (entry.isIntersecting && entry.target.id== 'footer') {
          
          this.observerService.footerObserver.next(true);
        }
        else {
          //service
          this.observerService.footerObserver.next(false);

        }
      });
    }, this.observerOptions);

   if(this.sections){
    this.sections.forEach((section) => {
      observer.observe(section.nativeElement);
    });
   }
  }
}
}
