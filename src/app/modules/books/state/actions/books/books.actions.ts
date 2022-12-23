import { HttpErrorResponse } from '@angular/common/http';
import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: any }>()
);

export const addBookActions=createActionGroup({
  source: 'Books',
  events: {
    'Add book': props<{ book: Book }>(),
    'Add book success': props<{ book: Book }>(),
    'Add book error': props<{ error: HttpErrorResponse | Error | string }>(),
  }
})
