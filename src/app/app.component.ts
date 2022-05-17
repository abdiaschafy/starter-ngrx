import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeUserName, initAction } from 'src/state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title='starter-ngrx';
  test = 55.22
  public user: Observable<any>={} as Observable<any>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(initAction());
    this.user = this.store.select((state: any) => state.root.user);
  }

  public changeUserName=(): void => {
    this.store.dispatch(changeUserName({ username: `Abdias ${Math.random()}`}));
  }
}
