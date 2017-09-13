import { Component } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent  {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  masters = [   'Information Structures in Python',
                       'Data Structures & Algorithms',
                       'Advanced Java Programming',
                       'Agile Software Development',
                       'Software Designs & Patterns',
                       'Information Systems Analysis & Design',
                       'Rich Internet App Development',
                       'Server-Side Web Development']
  bachelors = [ 'Object Oriented Programming',
                        'Data Structures & Algorithms',
                        'Discrete Math',
                        'Java Programming',
                        'Software Engineering Concepts',
                        'Operating System Concepts']
  constructor(  ) {}


}
