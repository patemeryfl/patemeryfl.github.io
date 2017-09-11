import { Component  } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-todos',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent  {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor( ) {}

}
