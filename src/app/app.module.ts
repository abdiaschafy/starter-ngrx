import { UsersData } from './api/users.data';
import { ROOT_FEATURE_KEY } from './state/00-reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from 'src/app/state/00-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/03-effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionTypeUniqueness: true,
        strictStateImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Starter',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
    InMemoryWebApiModule.forRoot(UsersData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
