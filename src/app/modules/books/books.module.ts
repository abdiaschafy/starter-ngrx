import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effects/book/book.effects';
import { BooksComponent } from './books/books.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
  { path: '', component: BooksComponent }
];

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducers, { metaReducers: fromBook.metaReducers }),
    EffectsModule.forFeature([BookEffects]),
    RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
