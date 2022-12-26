import { HttpErrorResponse } from '@angular/common/http';
import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { ErrorType } from 'src/app/models/error';

export const loadBooks = createAction(
  '[Books] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Books] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Books] Load Books Failure',
  props<{ error: ErrorType }>()
);

export const addBookActions=createActionGroup({
  source: 'Books',
  events: {
    'Add book': props<{ book: Book }>(),
    'Add book success': props<{ book: Book }>(),
    'Add book error': props<{ error: HttpErrorResponse | Error | string }>(),
  }
});

export const deleteBookActions=createActionGroup({
  source: 'Books',
  events: {
    'Delete book': props<{ id: number }>(),
    'Delete book success': props<{ id: number }>(),
    'Delete book error': props<{ error: HttpErrorResponse | Error | string }>(),
  }
});

export const updateBookActions=createActionGroup({
  source: 'Books',
  events: {
    'Update book': props<{ book: Book }>(),
    'Update book success': props<{ book: Book }>(),
    'Update book error': props<{ error: HttpErrorResponse | Error | string }>(),
  }
});
