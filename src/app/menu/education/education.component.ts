import { Component } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent  {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(  ) {}


}
