import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Home'
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
