import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ItemRoutingModule } from './nav-routing.module';
import { ItemComponent } from './items/item.component';

import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ItemRoutingModule
  ],
  declarations: [
    ResumeComponent,
    EducationComponent,
    AboutComponent,
    ItemComponent
  ],
  providers: [  ]
})
export class MenuModule {

  constructor() {}

}
