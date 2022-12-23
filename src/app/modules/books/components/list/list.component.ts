import { getBooks } from './../../state/selectors/book/book.selectors';
import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { deleteBookActions } from '../../state/actions/books/books.actions';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public bookForm: FormGroup;

  public books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.books$=this.store.pipe(select(getBooks));
  }

  deleteBook(id: number): void {
    this.store.dispatch(deleteBookActions.deleteBook({id}));
  }

  editBook(book: Book): void {
    this.bookForm.patchValue({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
      author: book.author
    });
  }

}
