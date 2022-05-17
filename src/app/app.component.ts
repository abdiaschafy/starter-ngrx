import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initAction } from 'src/state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title='starter-ngrx';

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(initAction());
  }
}
