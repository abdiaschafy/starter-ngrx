import { User } from './models/user';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/00-reducer';
import { changeUserName, initAction } from 'src/app/state/01-actions';
import { getUser } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title='starter-ngrx';
  test = 55.22
  public user: Observable<User>={} as Observable<User>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(initAction());
    // this.user = this.store.select((state: State) => state.root.user);
    // this.user=this.store.pipe(select((state: State) => state.root.user));
    this.user=this.store.pipe(select(getUser));
  }

  public changeUserName=(): void => {
    this.store.dispatch(changeUserName({ username: `Abdias ${Math.random()}`}));
  }
}
