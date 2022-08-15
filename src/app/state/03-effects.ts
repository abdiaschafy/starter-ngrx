import { UsersService } from './../services/users/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs';
import { UsersActions } from '../state/01-actions';
import { User } from '../models/user';

@Injectable()
export class AppEffects {

  loadUsers$=createEffect(() => this.actions$.pipe(
    tap((value) => console.log('actions ', value)),
    ofType(UsersActions.loadUsers),
    mergeMap(action => this.userService.getUsers().pipe(
      map((users: User[]) => UsersActions.loadUsersSuccess({ users }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) { }

}
