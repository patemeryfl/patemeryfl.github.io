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
    { link: 'resume', label: 'Resume' },
    { link: 'education', label: 'Education' },
    { link: 'about', label: 'About Site' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
