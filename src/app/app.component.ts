import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { login, logout, selectorAuth, routerTransition } from '@app/core';
import { environment as env } from '@env/environment';

import { selectorSettings } from './settings';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();
  @HostBinding('class') componentCssClass;

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal = '';

  version = env.versions.app;
  year = new Date().getFullYear();
  navigation = [
    { link: 'home', label: 'Home' },
    { link: 'projects', label: 'Projects' },
    { link: 'blog', label: 'Blog' },
    { link: 'contact', label: 'Contact' },
    { link: 'menu', label: 'More' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  isAuthenticated;

  constructor(public overlayContainer: OverlayContainer,
                     public db: AngularFireDatabase,
                     private auth: AngularFireAuth,
                     private store: Store<any>) {
        this.user = auth.authState;
        this.items = db.list('/article_group/article_list');
  }

  ngOnInit(): void {
    this.store
      .select(selectorSettings)
      .takeUntil(this.unsubscribe$)
      .map(({ theme }) => theme.toLowerCase())
      .subscribe(theme => {
        this.componentCssClass = theme;
        this.overlayContainer.themeClass = theme;
      });
    this.store
      .select(selectorAuth)
      .takeUntil(this.unsubscribe$)
      .subscribe(auth => this.isAuthenticated = auth.isAuthenticated);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
     this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     this.store.dispatch(login());
  }

  onLogoutClick() {
    this.auth.auth.signOut();
    this.store.dispatch(logout());
  }

}
