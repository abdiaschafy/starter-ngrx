import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './state/reducers/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './state/effects/book/book.effects';
import { BooksComponent } from '../books/books.component';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
  { path: '', component: BooksComponent }
];

@NgModule({
  declarations: [
    BooksComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects]),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class BooksModule { }
