import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

import { Router } from '@angular/router';
//import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'anms-features',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent {

  // animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  //
  // constructor(public authService: AuthService, private router:Router) { }
  //
  //ngOnInit() {}

  // openLink(link: string) {
  //   window.open(link, '_blank');
  //}
  // login() {
  //   this.authService.loginWithGoogle().then((data) => {
  //     this.router.navigate(['']);
  //   })
  // }

}
