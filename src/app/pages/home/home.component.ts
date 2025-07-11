import { Component } from '@angular/core';
import { LandingpageComponent } from "./landingpage/landingpage.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingpageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
