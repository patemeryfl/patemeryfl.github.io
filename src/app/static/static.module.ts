import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogInComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule
  ],
  declarations: [
    AboutComponent,
    BlogComponent,
    ContactComponent,
    ProjectsComponent,
    LogInComponent
  ]
})
export class StaticModule { }
