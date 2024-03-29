import { Book } from './../../../../../models/book';
import { Action, createReducer, on } from '@ngrx/store';
import * as BooksActions from '../../actions/books/books.actions';
import { ErrorType } from 'src/app/models/error';


export const booksFeatureKey = 'books';

export interface BooksState {
  books: Book[];
  book: Book | null;
  error?: ErrorType;
}
export interface State {
  readonly [booksFeatureKey]: BooksState;
}

export const initialState: BooksState = {
  books: [],
  book: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooksSuccess, (state, { books }) => {
    return {
      ...state,
      books
    }
  }),
  on(BooksActions.loadBooksFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  }),
  on(BooksActions.addBookActions.addBook, (state) => {
    return {
      ...state
    }
  }),
  on(BooksActions.addBookActions.addBookSuccess, (state, {book}) => {
    return {
      ...state,
      books: [...state.books, book]
    }
  }),
  on(BooksActions.deleteBookActions.deleteBook, (state) => {
    return {
      ...state
    }
  }),
  on(BooksActions.deleteBookActions.deleteBookSuccess, (state, {id}) => {
    return {
      ...state,
      books: state.books.filter((book: Book) => book.id !== id)
    }
  }),
  on(BooksActions.updateBookActions.updateBook, (state) => {
    return {
      ...state
    }
  }),
  on(BooksActions.updateBookActions.updateBookSuccess, (state, {book}) => {
    const updatedBooks: Book[] = state.books.map((existingBook: Book) => existingBook.id === existingBook.id ? book : existingBook);
    return {
      ...state,
      books: updatedBooks
    }
  }),
  on(BooksActions.updateBookActions.updateBookError, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  })
);
