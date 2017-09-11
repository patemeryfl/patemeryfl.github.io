import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-parent',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  themeSrc: string = require('!raw-loader!./parent.component.scss-theme.scss');

  constructor() {}

  ngOnInit() {
  }

}
