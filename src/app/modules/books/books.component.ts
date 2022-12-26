import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { ErrorType } from 'src/app/models/error';

import * as BooksActions from './state/actions/books/books.actions'
import { getBooksError } from './state/selectors/book/book.selectors';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private store: Store) { }

  public books$: Observable<Book[]>;
  public error$: Observable<ErrorType>;

  ngOnInit(): void {
    this.store.dispatch(BooksActions.loadBooks());
    this.error$=this.store.select(getBooksError);
  }

}
