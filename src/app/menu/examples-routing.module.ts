import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemComponent } from './items/item.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/parent/about.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    children: [
      {
        path: '',
        redirectTo: 'resume',
        pathMatch: 'full'
      }, {
        path: 'resume',
        component: ResumeComponent
      }, {
        path: 'education',
        component: EducationComponent
      }, {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
