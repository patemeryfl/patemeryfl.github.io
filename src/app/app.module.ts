import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AngularFireModule} from 'angularfire2';
// import { AuthService } from './providers/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBM5UCP8nKL8NMrNIsBznm1qBow26xBF-c",
  authDomain: "personalportfolio-1ca58.firebaseapp.com",
  databaseURL: "https://personalportfolio-1ca58.firebaseio.com",
  projectId: "personalportfolio-1ca58",
  storageBucket: "personalportfolio-1ca58.appspot.com",
  messagingSenderId: "350713099700"
};

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // projects
    StaticModule,
    SettingsModule,

    // app
    AppRoutingModule,

    //Firebase
    //AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent
  ],
  providers: [], //AuthService
  bootstrap: [AppComponent]
})
export class AppModule { }
