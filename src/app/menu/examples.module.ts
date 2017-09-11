import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ItemRoutingModule } from './examples-routing.module';
import { ItemComponent } from './items/item.component';

import { ResumeComponent } from './resume/resume.component';
import { todosReducer } from './resume/todos.reducer';
import { TodosEffects } from './resume/todos.effects';

import { EducationComponent } from './education/education.component';
import { stockMarketReducer } from './education/stock-market.reducer';
import { StockMarketEffects } from './education/stock-market.effects';
import { StockMarketService } from './education/stock-market.service';

import { AboutComponent } from './about/parent/about.component';
import { ChildComponent } from './about/child/child.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ItemRoutingModule,
    StoreModule.forFeature('examples', {
      todos: todosReducer,
      stocks: stockMarketReducer
    }),
    EffectsModule.forFeature([
      TodosEffects,
      StockMarketEffects
    ])
  ],
  declarations: [
    ItemComponent,
    ResumeComponent,
    EducationComponent,
    AboutComponent,
    ChildComponent
  ],
  providers: [
    StockMarketService
  ]
})
export class MenuModule {

  constructor() {}

}
