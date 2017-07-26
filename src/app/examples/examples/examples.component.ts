import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routerTransition]
})
export class ExamplesComponent implements OnInit {

  examples = [
    { link: 'todos', label: 'Resume' },
    { link: 'stock-market', label: 'Education' },
    { link: 'theming', label: 'About Site' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
