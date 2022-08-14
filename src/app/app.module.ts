import { ROOT_FEATURE_KEY } from './state/00-reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from 'src/app/state/00-reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      [ROOT_FEATURE_KEY]: rootReducer
    }, {
      metaReducers: metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
