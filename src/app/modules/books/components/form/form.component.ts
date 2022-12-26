import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addBookActions, updateBookActions } from '../../state/actions/books/books.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  public booksForm: FormGroup;
  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private actionsSubject: ActionsSubject
    ) { }

  ngOnInit(): void {

    this.booksForm=this.formBuilder.group({
      id: [''],
      name: [''],
      author: [''],
      publisher: ['']
    });

    this.subscription.add(this.actionsSubject.pipe(
      ofType(updateBookActions.updateBookSuccess, addBookActions.addBookSuccess)
    ).subscribe(() => this.booksForm.reset()));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    const id = this.booksForm.value.id;
    if (isIdExist(id)) {
      this.store.dispatch(updateBookActions.updateBook( { book: this.booksForm.value } ));
    }else {
      this.store.dispatch(addBookActions.addBook({ book: this.booksForm.value })); 
    }

    function isIdExist(id: number | string): boolean {
      return id !== null && id !== undefined && id !== '';
    }
  }

}
