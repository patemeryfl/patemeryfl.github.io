import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageTitle = 'Home'
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
