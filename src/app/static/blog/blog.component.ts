import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'anms-features',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  items: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase,) {
    this.items = db.list('/article_group/article_list');
  }

  ngOnInit() {

  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
