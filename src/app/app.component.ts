import { User } from './models/user';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/00-reducer';
import { loadUsers, RootActions } from 'src/app/state/01-actions';
import { getUser } from './state/02-selectors';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title='starter-ngrx';
  test = 55.22
  public user: Observable<User>={} as Observable<User>;

  constructor(
    private store: Store<State>,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp());

    this.user=this.store.pipe(select(getUser));

    this.http.get('api/users').subscribe(value => console.log(value));
  }

  public changeUserName=(): void => {
    this.store.dispatch(RootActions.changeUserName({ username: `Abdias ${Math.random()}`}));
    this.store.dispatch(RootActions.changeIsAdmin({ isAdmin: false}));
  }

  public loadUsers(): void {
    this.store.dispatch(loadUsers());
  }
}
