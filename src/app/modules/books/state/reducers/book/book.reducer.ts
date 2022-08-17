import { Book } from './../../../../../models/book';
import { Action, createReducer, on } from '@ngrx/store';
import * as BooksActions from '../../actions/books/books.actions'


export const booksFeatureKey = 'books';

export interface BooksState {
  books: Book[];
  book: Book | null;
}
export interface State {
  readonly [booksFeatureKey]: BooksState;
}

export const initialState: BooksState = {
  books: [],
  book: null
};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    return {
      ...state,
      books
    }
  })

);
