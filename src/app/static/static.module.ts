import { NgModule } from '@angular/core';
// import { MdFormFieldModule } from '@angular/material';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule
    // MdFormFieldModule
  ],
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactComponent,
    ProjectsComponent
  ]
})
export class StaticModule { }
