import { BooksService } from '../../../../books/services/books.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as BooksActions from '../../actions/books/books.actions'
import { map, mergeMap, catchError, of } from 'rxjs';
import { Book } from 'src/app/models/book';

@Injectable()
export class BookEffects {


  constructor(
    private actions$: Actions,
    private booksService: BooksService
  ) { }

  loadUsers$=createEffect(() => this.actions$.pipe(
    ofType(BooksActions.loadBooks),
    mergeMap(() => this.booksService.getBooks().pipe(
      map((books: Book[]) => BooksActions.loadBooksSuccess({ books })),
      catchError(error => of(BooksActions.loadBooksFailure({ error: error.body.error })))
    ))
  ));

  addBook$=createEffect(() => this.actions$.pipe(
    ofType(BooksActions.addBookActions.addBook),
    mergeMap(( { book } ) => this.booksService.addBook(book).pipe(
      map((book: Book) => BooksActions.addBookActions.addBookSuccess({ book })),
      catchError(error => of(BooksActions.addBookActions.addBookError({ error: error.body.error })))
    ))
  ));

  deleteBook$=createEffect(() => this.actions$.pipe(
    ofType(BooksActions.deleteBookActions.deleteBook),
    mergeMap(( { id } ) => this.booksService.deleteBook(id).pipe(
      map(() => BooksActions.deleteBookActions.deleteBookSuccess({ id })),
      catchError(error => of(BooksActions.deleteBookActions.deleteBookError({ error: error.body.error })))
    ))
  ));

  updateBook$=createEffect(() => this.actions$.pipe(
    ofType(BooksActions.updateBookActions.updateBook),
    mergeMap(( { book } ) => this.booksService.updateBook(book).pipe(
      map(( ) => BooksActions.updateBookActions.updateBookSuccess({ book })),
      catchError(error => of(BooksActions.updateBookActions.updateBookError({ error: error.body.error })))
    ))
  ));
}
