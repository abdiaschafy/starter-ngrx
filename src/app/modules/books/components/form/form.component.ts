import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addBookActions } from '../../state/actions/books/books.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public booksForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  ngOnInit(): void {

    this.booksForm=this.formBuilder.group({
      id: [''],
      name: [''],
      author: [''],
      publisher: ['']
    });
  }

  public onSubmit() {
    console.log('MY FORM ', this.booksForm.value);
    this.store.dispatch(addBookActions.addBook({ book: this.booksForm.value }));
  }

}
