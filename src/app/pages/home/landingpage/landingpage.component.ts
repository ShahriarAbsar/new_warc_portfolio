import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { HeaderComponent } from "../../../core/header/header.component";
import { ObserverService } from '../../../services/observer.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  @ViewChildren('main, footer') sections: QueryList<ElementRef> | undefined;
  observerOptions = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // adjust this as necessary
};

constructor(private observerService:ObserverService){

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
