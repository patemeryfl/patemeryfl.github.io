import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  blogList: FirebaseListObservable<any[]>;
  blogContent: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase,) {
    this.blogList = db.list('/article_group/article_list');
    this.blogContent = db.list('/article_group/article');
  }

  ngOnInit() {

  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
