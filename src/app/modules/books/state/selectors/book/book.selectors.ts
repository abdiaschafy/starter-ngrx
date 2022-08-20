import { booksFeatureKey, BooksState } from './../../reducers/book/book.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectBooksFeature=createFeatureSelector<BooksState>(booksFeatureKey);

export const getBooks=createSelector(selectBooksFeature, (state: BooksState) => state.books);
