import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-examples',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [routerTransition]
})
export class ItemComponent implements OnInit {

  examples = [
    { link: 'todos', label: 'Resume' },
    { link: 'stock-market', label: 'Education' },
    { link: 'theming', label: 'About Site' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
